import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity
  } from 'react-native';
 import Event from '../../utils/event';

const example = props => {
    const [ listData, setListData ] = useState([]);

    useEffect(() => {
        Event.subscribe('addPage', addPage);
        return Event.unSubscribe('addPage', addPage);
    }, [])

    useEffect(() => {
        console.log(123);
    })

    addPage = (data) => {
        console.log(data, 'event Data');
        reload();
    }

    fetchData = () => {
        fetch('https://cnodejs.org/api/v1/topics')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            if (myJson.success) {
                setListData(myJson.data);
            }
        });
    }

    reload = () => {
        setListData([]);
        // this.fetchData(); 两种实现重新加载的方式，个人比较习惯于第一种吧
        // 第二种比较贴近新hook思想 Math.random并不好 有可能重复 忽略
        setFlag(Math.random());
    }

    const [ flag, setFlag ] = useState(0);
    useEffect(() => {
        console.log(this); // 震惊 this 上依旧绑定了 上层函数
        fetchData();
    }, [ flag ])

    if (!listData.length) {
        return <Text>Loading</Text>
    }
    return (
      <>
        <TouchableOpacity style={styles.btn} onPress={this.reload}>
            <Text style={styles.btnText}>useEffect: 刷新</Text>
        </TouchableOpacity>
        <ScrollView>
            {
                listData.map(item => {
                    return(
                        <View key={item.id}>
                            <Text numberOfLines={1}>{item.title}</Text>
                        </View>
                    );
                })
            }
        </ScrollView>
      </>
    );
}
const styles = StyleSheet.create({
    btn: {
        height: 40,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
    },
    btnText: {
        color: '#000'
    }
});
export default example;


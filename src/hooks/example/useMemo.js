import React, { useState, useContext, useMemo } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity
  } from 'react-native';
import Event from '../../utils/event';
import { MyContext } from '../index';
const example = props => {
    const { value } = useContext(MyContext);
    const [ count, setCount ] = useState(0);
    // memo是被缓存的 其他改变 并不会执行内部函数  而是直接拿变量
    const memo = useMemo(() => {
      console.log('memo');
      return `[ ${value} ]`;
    }, [value])
    console.log(memo, 'memo');
    return (
      <>
        <View style={styles.textWrapper}>
            <Text style={styles.text}>useMemo: {memo}</Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={() => {
            setCount(count + 1);
        }}>
            <Text style={styles.btnText}>增加</Text>
        </TouchableOpacity>
      </>
    );
}
const styles = StyleSheet.create({
    textWrapper: {
        padding: 10
    },
    text: {
        color: 'red'
    },
    btn: {
      width: 100,
      height: 40,
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 5,
      backgroundColor: 'rgba(255, 0, 0, 0.5)',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5
  },
  btnText: {
      color: '#fff'
  }
});
export default example;


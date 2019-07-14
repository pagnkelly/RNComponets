import React, { useState, useCallback, PureComponent } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity
  } from 'react-native';

class Child extends PureComponent {

  render() {
    return (
      <View style={styles.textWrapper}>
        <Text style={styles.text}>useCallback: {this.props.fn()}</Text>
      </View>
    )
  }
  
}

const example = props => {
    const [ count, setCount ] = useState(0);
    const [ count2, setCount2 ] = useState(0);
    // fn被缓存 其他改变 并不会执行内部函数
    const fn = useCallback(() => {
      console.log('useCallback');
      return `[ ${count} ]`;
    }, [count]);

    console.log(fn, 'callback');
    return (
      <>
        <Child fn={fn} />
        <TouchableOpacity style={styles.btn} onPress={() => {
            setCount(count + 1);
        }}>
            <Text style={styles.btnText}>增加</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => {
            setCount2(count2 + 1);
        }}>
            <Text style={styles.btnText}>增加 ： {count2}</Text>
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


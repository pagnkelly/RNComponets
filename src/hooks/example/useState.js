import React, { useState, useContext } from 'react';
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
    const [ count, setCount ] = useState(0);
    const { value } = useContext(MyContext);
    return (
      <>
        <View style={styles.textWrapper}>
            <Text style={styles.text}>useState: {value} : {count}</Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={() => {
            setCount(count + 1);
            Event.notify('addPage', count + 1);
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


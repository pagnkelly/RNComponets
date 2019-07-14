import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    ScrollView,
    TouchableOpacity
  } from 'react-native';

function FInput(props, ref) {
  console.log(ref);
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return (
    <TextInput ref={inputRef} /> 
  );
}

FInput = forwardRef(FInput);


const example = () => {
    let ref = useRef(null);

    return (
      <>
        <FInput ref={ref}/>
        <TouchableOpacity style={styles.btn} onPress={() => {
          console.log(ref.current, 'rrr');
          ref.current.focus();
        }}>
            <Text style={styles.btnText}>focus</Text>
        </TouchableOpacity>
      </>
    );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
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
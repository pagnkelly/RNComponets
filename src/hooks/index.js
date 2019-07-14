import React, { useState, createContext, useReducer } from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    ScrollView,
    TouchableOpacity
  } from 'react-native';
import UseStateExample from './example/useState';
import UseMemoExample from './example/useMemo';
import UseEffectExample from './example/useEffect';
import UseCallbackExample from './example/useCallback';
import UseRefExample from './example/useRef';
import reducer from './reducer';
export const MyContext = createContext();


const hooks = () => {
    const [value, setValue] = useState('');
    const [state, dispatch] = useReducer(reducer, { times: 1});

    return (
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
        <TextInput
          onChangeText={(v) => {
            setValue(v);
            dispatch({type: 'addTimes'});
            dispatch({type: 'setInput', payload: v });
          }}  
          value={value}
        /> 
        <Text>{state.times}</Text>
        <MyContext.Provider value={{ value }}>
          <UseCallbackExample />
          <UseMemoExample />
          <UseStateExample />
          <UseEffectExample />
          <UseRefExample />
        </MyContext.Provider>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});
export default hooks;
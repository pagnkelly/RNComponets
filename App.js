import React, { PureComponent } from 'react';
import {
  View
} from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Example from './src/example';
import Popup from './src/popup';
import List from './src/list';

const RouteConfig = {
    MainTab: {
        screen: Example,
        //navigationOptions: ({navigation}) => ({header: null})
    },
    Popup: {
        screen: Popup,
        // navigationOptions: ({navigation}) => ({header: null})
    },
    List_BackTop_Search: {
        screen: List
    }
}

const StackNavigatorConfig = {
    initialRouteName: 'MainTab'
}

const Navigator = createAppContainer(createStackNavigator(RouteConfig, StackNavigatorConfig));

export default class App extends PureComponent {
  render() {
    return (
      <Navigator screenProps={111} />
    )
  }
}

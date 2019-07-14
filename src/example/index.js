import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  PixelRatio,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

const COMPONENTS = ['Popup', 'List_BackTop_Search', 'Hooks'];
class Example extends Component {

  constructor(props) {
    super(props);
    // console.error('Example', isIphoneX);
  }

  goto(path) {
    this.props.navigation.navigate(path);
  }

  renderItems = () => {
    return COMPONENTS.map(item => (
      <TouchableOpacity key={`${item}_page`} style={styles.item} onPress={() => this.goto(item)} >
        <Text style={styles.itemText}>{item}</Text>
      </TouchableOpacity>
    ));
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroll}>
          { this.renderItems() }
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  scroll: {
    padding: 20
  },
  item: {
    padding: 20,
    paddingLeft: 0,
    borderColor: '#aaa',
    borderBottomWidth: 1 / PixelRatio.get()
  },
  itemText: {
    fontSize: 20
  }
});
export default Example;

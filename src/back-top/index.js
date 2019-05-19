import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';

class BackTop extends Component {
  constructor(props) {
    super(props);
    console.log('BackTop');
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
        <View style={styles.trigle}/>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 44 + 14,
    right: 20,
    width: 48,
    height: 48,
    backgroundColor: '#000',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    fontSize: 16,
    color: '#4C5358'
  },
  trigle: {
    borderWidth: 10,
    borderTopColor: 'transparent',
    borderBottomColor: '#fff',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent'
  }
});

export default BackTop;

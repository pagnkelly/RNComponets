import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  PixelRatio
} from 'react-native';

class BarbellIcon extends Component {
  componentDidMount() {
  }

  render() {
    const {
      style,
      color,
      length,
      radius
    } = this.props;

    return (
      <View style={[styles.container, style]}>
        <View style={[styles.bell, {
          borderWidth: 1 / PixelRatio.get(),
          borderColor: color,
          borderRadius: radius / 2,
          height: radius - 1,
          width: radius - 1
        }]}
        />
        <View style={[styles.bar, {
          width: length,
          backgroundColor: color
        }]}
        />
        <View style={[styles.bell, {
          height: radius,
          width: radius,
          borderRadius: radius / 2,
          backgroundColor: color
        }]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  bell: {},
  bar: {
    height: 1 / PixelRatio.get()
  }
});

BarbellIcon.defaultProps = {
  color: '#D5DCE2',
  length: 20,
  radius: 5
};

export default BarbellIcon;

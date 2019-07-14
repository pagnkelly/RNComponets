import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  PixelRatio,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Popup from '../components/popup';

class PopupPPP extends Component {
  constructor(props) {
    super(props);
    // console.error('Example', isIphoneX);
    this.state = {
      showTopPopup: false,
      showBottomPopup: false,
      showCenterPopup: false
    };
  }

  onPopupPress(slideFrom = 'bottom') {
    const map = {
      top: 'showTopPopup',
      bottom: 'showBottomPopup',
      center: 'showCenterPopup'
    };
    this.setState({
      [map[slideFrom]]: true
    });
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.popup}>
          <TouchableOpacity onPress={() => this.onPopupPress('top')} style={styles.button}>
            <Text>
              top to bottom
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onPopupPress('bottom')} style={styles.button}>
            <Text>
              bottom to top
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onPopupPress('center')} style={styles.button}>
            <Text>
              center
            </Text>
          </TouchableOpacity>
        </View>
        <Popup
          visible={this.state.showTopPopup}
          onClose={() => this.setState({ showTopPopup: false })}
          slideFrom="top"
        >
          <View>
            <Text>item1</Text>
            <Text>item2</Text>
            <Text>item3</Text>
            <Text>item4</Text>
          </View>
        </Popup>

        <Popup
          visible={this.state.showBottomPopup}
          onClose={() => this.setState({ showBottomPopup: false })}
          slideFrom="bottom"
          title="popup"
        >
          <View style={{ marginBottom: 44 }}>
            <Text>item1</Text>
            <Text>item2</Text>
            <Text>item3</Text>
            <Text>item4</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="transparent"
            />
          </View>
        </Popup>

        <Popup
          visible={this.state.showCenterPopup}
          onClose={() => this.setState({ showCenterPopup: false })}
          slideFrom="center"
          contentStyles={{ height: 200 }}
        >
          <View>
            <Text>item1</Text>
            <Text>item2</Text>
            <Text>item3</Text>
            <Text>item4</Text>
          </View>
        </Popup>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  popup: {
    padding: 20,
    flexDirection: 'row'
  },
  button: {
    padding: 10,
    margin: 5,
    backgroundColor: 'lightblue',
    borderRadius: 4,
    borderWidth: 1 / PixelRatio.get(),
  },
  textInput: {
    backgroundColor: '#EEE',
    height: 44,
    borderRadius: 4,
    paddingLeft: 25,
    paddingRight: 25,
    fontSize: 12
  }
});
export default PopupPPP;

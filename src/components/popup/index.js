import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Animated,
  Keyboard,
  StyleSheet
} from 'react-native';
// import { safeTop, bottomSafeHeight } from '../utils/device';

const {
  height: SCREEN_HEIGHT
} = Dimensions.get('window');

const DURATION = 250;

class Popup extends Component {
  constructor(props) {
    super(props);
    this.animate = new Animated.Value(0);
    this.keyBoardAnimate = new Animated.Value(0);
  }

  componentDidMount() {
    if (this.props.visible) {
      this.in();
    }
    this.keyboardDidShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible !== this.props.visible) {
      if (nextProps.visible) {
        this.in();
      } else {
        this.out();
      }
    }
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  onCancel = () => {
    this.props.onCancel();
    this.closeView();
  }

  onEnsure = () => {
    this.props.onEnsure();
    this.closeView();
  }

  getAnimations(slideFrom) {
    const ANIMATED = {
      top: {
        translateY: this.animate.interpolate({
          inputRange: [0, 1],
          outputRange: [0, SCREEN_HEIGHT]
        })
      },
      bottom: {
        translateY: this.animate.interpolate({
          inputRange: [0, 1],
          outputRange: [SCREEN_HEIGHT, -SCREEN_HEIGHT]
        })
      },
      center: {
        scale: this.animate.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1]
        })
      }
    };

    return {
      transform: [ANIMATED[slideFrom]]
    };
  }

  getInitStyle(slideFrom) {
    const initStyles = {
      position: 'absolute',
      left: 0,
      right: 0,
      backgroundColor: '#ffffff',
      padding: 10
    };
    const bottomOffset = 200;
    const INIT_STYLRES = {
      top: {
        ...initStyles,
        // paddingTop: safeTop,
        top: -SCREEN_HEIGHT,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
      },
      bottom: {
        ...initStyles,
        paddingBottom: bottomOffset,
        bottom: -SCREEN_HEIGHT - bottomOffset,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
      },
      center: {
        backgroundColor: '#ffffff',
        height: 100,
        marginLeft: 20,
        marginRight: 20,
        flex: 1,
        borderRadius: 10,
        paddingVertical: 10
      }
    };
    return {
      ...INIT_STYLRES[slideFrom]
    };
  }

  in() {
    Animated.spring(this.animate, {
      toValue: 1,
      friction: 10
    }).start();
  }

  out() {
    Animated.spring(this.animate, {
      toValue: 0,
      friction: 10
    }).start();
  }

  keyboardWillShow = e => {
    const keyBoardHeight = e.endCoordinates ? e.endCoordinates.height || 335 : 335;
    Animated.timing(this.keyBoardAnimate, {
      toValue: keyBoardHeight,
      duration: DURATION
    }).start();
  }

  keyboardWillHide = () => {
    Animated.timing(this.keyBoardAnimate, {
      toValue: 0,
      duration: DURATION
    }).start();
  }

  closeView = () => {
    Keyboard.dismiss();
    this.props.onClose();
  }

  render() {
    const {
      visible,
      defaultHeader,
      title,
      children,
      slideFrom,
      contentStyles
    } = this.props;

    const slideFromStr = slideFrom.toLocaleLowerCase();

    const containerStyles = [styles.screen];
    if (!visible) {
      containerStyles.push(styles.hidden);
    } else {
      containerStyles.push(StyleSheet.absoluteFill);
    }


    return (
      <View style={containerStyles}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            this.closeView();
          }}
          style={[styles.mask, StyleSheet.absoluteFill]}
        />
        <Animated.View
          style={[
            this.getAnimations(slideFromStr),
            this.getInitStyle(slideFromStr),
            { marginBottom: this.keyBoardAnimate },
            contentStyles
          ]}
        >
          {
            defaultHeader && slideFrom === 'bottom' &&
            <View style={styles.header}>
              <TouchableOpacity onPress={this.onCancel}>
                <Text style={styles.cancel}>{defaultHeader.cancel}</Text>
              </TouchableOpacity>
              <Text style={styles.title}>{ title }</Text>
              <TouchableOpacity onPress={this.onEnsure}>
                <Text style={styles.ensure}>{defaultHeader.ok}</Text>
              </TouchableOpacity>
            </View>
          }
          {children}
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  hidden: {
    position: 'absolute',
    bottom: -10000
  },
  mask: {
    backgroundColor: '#000000',
    opacity: 0.5
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 16,
    paddingBottom: 16
  },
  cancel: {
    fontSize: 16,
    color: '#4C5358'
  },
  title: {
    fontSize: 12,
    color: '#4C5358'
  },
  ensure: {
    fontSize: 16,
    color: '#1D79D0'
  }

});

Popup.defaultProps = {
  visible: false,
  onClose: () => {},
  children: null,
  slideFrom: 'bottom',
  contentStyles: {}, // 慎用
  // 仅在从底部出现的组件使用
  // ---------------
  defaultHeader: {
    cancel: '取消',
    ok: '确定'
  },
  title: '',
  onCancel: () => {},
  onEnsure: () => {}
  // ----------------
};

export default Popup;

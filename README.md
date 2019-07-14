## React-native Components

### env
* node v8.11.1
* npm 5.6.0
---
### Start

```sh
  yarn install

  sudo npm install -g react-native-cli // 没有react-native-cli需执行

  
  react-native link react-native-gesture-handler

  sudo react-native run-ios

  sudo xcode-select -s /Applications/Xcode.app/Contents/Developer/ // 找不到路径执行

```

---
### Popup

```js
<Popup
  visible={this.state.showTopPopup}
  onClose={() => this.setState({ showTopPopup: false })}
  slideFrom="top"
>

```

#### Display

![img](https://github.com/pagnkelly/imageszz/blob/master/RNComponents/popup.gif?raw=true)
### List_BackTop_Search

#### Display
![img](https://raw.githubusercontent.com/pagnkelly/imageszz/master/RNComponents/list.gif)

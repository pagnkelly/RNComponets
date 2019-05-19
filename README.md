## React-native Components

### env
* node v8.11.1
* npm 5.6.0
---
### Start

```sh
  yarn install

  react-native link react-native-gesture-handler

  react-native run-ios
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

import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Animated,
  StyleSheet
} from 'react-native';
import Search from '../search';
import List from './list';
import Suggest from '../search/suggest';
import BackTop from '../back-top';

class ListWrap extends Component {
  constructor(props) {
    console.log(1111111);
    super(props);
    this.state = {
      scrollViewOffsetY: new Animated.Value(0),
      showBackTop: false,
      isSearching: false,
      searchValue: ''
    };
  }

  componentWillMount() {
    this.top = this.state.scrollViewOffsetY.interpolate({
      inputRange: [-2, -1, 0, 270, 271, 280],
      outputRange: [0, 0, 0, -120, -120, -120]
    });

    this.animatedEvent = Animated.event([
      {
        nativeEvent: {
          contentOffset: { y: this.state.scrollViewOffsetY }
        }
      }
    ], {
      listener: this.listScrollHandler
    });
  }

  componentDidMount() {
    // this.props.fetchList();
  }

  componentWillUnmount() {

  }

  listScrollHandler = e => {
    const { y } = e.nativeEvent.contentOffset;
    const { showBackTop } = this.state;
    if (y > 900 && y < 1200 && !showBackTop) {
      this.setState({
        showBackTop: true
      });
    } else if (
      ((y > 600 && y < 900) ||
          (y < 100)) && showBackTop) {
      this.setState({
        showBackTop: false
      });
    }
  }

  backTopHandler = () => {
    if (this.scrollView) {
      this.scrollView.scrollTo({ y: 0, animated: true });
    }
  }

  getIsSearchingState = isSearching => {
    this.setState({ isSearching });
  }

  getSearchValue = value => {
    this.setState({ searchValue: value  });
  }
  render() {
    const {
      isSearching,
      searchValue,
      showBackTop
    } = this.state;
    console.log(isSearching, showBackTop);
    return (
      <View style={{ flex: 1 }}>
        <Search top={this.top} getSearchValue={this.getSearchValue} getIsSearchingState={this.getIsSearchingState}/>
        { isSearching ?
          <Suggest searchValue={ searchValue }/> :
          <List
            getScrollView={v => {
              this.scrollView = v;
            }}
            onScroll={this.animatedEvent}
            top={this.top}
          />
        }
        { showBackTop && <BackTop onPress={this.backTopHandler} /> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 20
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#4C5358'
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  downArrowIcon: {
    marginLeft: 9,
    fontSize: 18,
    color: '#4C5358'
  }
});

export default ListWrap;

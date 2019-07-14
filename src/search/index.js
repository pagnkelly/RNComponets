import React, { PureComponent } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  Animated,
  PixelRatio,
  TouchableOpacity
  // TouchableHighlight
} from 'react-native';

const DELAY = 300; // 搜索防抖时间

class Search extends PureComponent {
  constructor(props) {
    super(props);
    console.log(props);
    this.state={
      searchValue: ''
    }
    this.searchTimer = null;
  }

  componentDidMount() {
    // this.props.fetchList();

  }

  componentWillUnmount() {
    if (this.searchTimer) {
      clearTimeout(this.searchTimer);
    }
  }

  onSearchChange = value => {
    this.setState({
      searchValue: value
    });

    this.props.getSearchValue(value);
    // 防抖 suggest
    if (this.searchTimer) {
      clearTimeout(this.searchTimer);
    }
    this.searchTimer = setTimeout(() => {
      console.log('fetch suggest');
    }, DELAY);
  }

  onFocus = () => {
    this.props.getIsSearchingState(true);
  }

  onBlur = () => {
    this.props.getIsSearchingState(false);
  }

  onClearInput = () => {
    this.setState({
      searchValue: ''
    });
  }

  render() {
    const { searchValue } = this.state;
    const { top } = this.props;
    return (
      <Animated.View
        style={[
          styles.container,
          {
            top
          }
        ]}
      >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            onChangeText={this.onSearchChange}
            value={searchValue}
            placeholder={'something'}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          />
          <View unicode="0xe7b1" style={styles.searchIcon} />
          {
            !!searchValue &&
              <TouchableOpacity onPress={this.onClearInput} style={styles.clearIconWrap}>
                <View unicode="0xe7a2" style={styles.clearIcon} />
              </TouchableOpacity>
          }
        </View>

        <ScrollView
          horizontal
          contentContainerStyle={styles.tags}
          showsHorizontalScrollIndicator={false}

        >
          <View style={styles.tag}>
            <Text style={styles.tagText}>xxxx</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>xxxx</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>xxxxxx</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>21221312312312321312</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>21221312312312321312</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>21221312312312321312</Text>
          </View>
        </ScrollView>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFF',
    zIndex: 1
  },
  topShadow: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -10,
    height: 10
  },
  textInput: {
    height: 36,
    borderRadius: 4,
    paddingLeft: 34,
    fontSize: 12
  },
  tags: {
    marginTop: 10
  },
  tag: {
    padding: 12,
    borderColor: '#A5B1BC',
    borderWidth: 1 / PixelRatio.get(),
    borderRadius: 4,
    marginRight: 6
  },
  tagText: {
    fontSize: 12,
    color: '#4C5358'
  },
  searchIcon: {
    width: 16,
    height: 16,
    backgroundColor: '#000',
    position: 'absolute',
    left: 17,
    top: 13,
    fontSize: 10,
    color: '#C8D1D8'
  },
  clearIconWrap: {
    width: 16,
    height: 16,
    backgroundColor: '#000',
    borderRadius: 8,
    position: 'absolute',
    right: 19,
    top: 8
  },
  clearIcon: {
    fontSize: 20,
    color: '#C8D1D8'
  },
  inputContainer: {
    position: 'relative',
    backgroundColor: '#F2F5F7',
    borderRadius: 4
  }
});

export default Search;

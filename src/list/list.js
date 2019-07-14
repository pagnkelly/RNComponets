import React, { PureComponent } from 'react';
import {
  Text,
  // View,
  // TextInput,
  ListView,
  Animated,
  RefreshControl
  // TouchableHighlight
} from 'react-native';
import ListCell from './list-cell';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1.id !== r2.id
});

const mockList = [
  { id: 1, title: 'cell1' },
  { id: 2, title: 'cell2' },
  { id: 3, title: 'cell3' },
  { id: 4, title: 'cell4' },
  { id: 6, title: 'cell5' }
];


class List extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      loading: false,
      list: ds.cloneWithRows(mockList)
    };
  }

  componentDidMount() {
    // this.props.fetchList();
  }

  componentWillUnmount() {
    clearTimeout(this.refreshTimer);
    clearTimeout(this.loadMoreTimer);
  }

  onRefresh = () => {
    this.setState({ refreshing: true });
    this.refreshTimer = setTimeout(() => {
      this.setState({ refreshing: false });
    }, 1000);
  }

  loadMore = () => {
    this.setState({ loading: true });
    this.loadMoreTimer = setTimeout(() => {
      this.setState({ loading: false, list: ds.cloneWithRows(mockList.concat(mockList)) });
    }, 3000);
  }

  renderRow = rowData => <ListCell key={`${rowData.id}_list`} rowData={rowData} />

  renderFooter = () => {
    if (this.state.loading) {
      return (<Text style={{ paddingTop: 30, paddingBottom: 30, alignItems: 'center' }}>加载中</Text>);
    }
  }

  render() {
    const { getScrollView, top } = this.props;
    console.log('top ll', top);
    return (
      <Animated.View style={[{ top }]}>
        <ListView
          ref={v => {
            this.scrollView = v;
            getScrollView(this.scrollView);
          }}
          scrollEventThrottle={16}
          dataSource={this.state.list}
          renderRow={this.renderRow}
          renderFooter={this.renderFooter}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />
          }
          onEndReached={this.loadMore}
          onEndReachedThreshold={10}
          onScroll={this.props.onScroll}
        />
      </Animated.View>
    );
  }
}

export default List;

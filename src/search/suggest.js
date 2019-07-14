import React, { PureComponent } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  PixelRatio
  // TouchableHighlight
} from 'react-native';

class Suggest extends PureComponent {
  componentDidMount() {
    // this.props.fetchList();
  }

  renderSuggests = () => {
    const mock = [
      {
        text: 'sdadasda'
      },
      {
        text: 'wdwdwdw'
      },
      {
        text: 'dasdas'
      },
      {
        text: 'dddddddd'
      }
    ];
    const { searchValue } = this.props;
    const content = mock.map(item => {
      const start = item.text.indexOf(searchValue);
      let texts = [<Text key={`${item.text}_0`} style={styles.text}>{item.text}</Text>];
      if (start > -1) {
        const end = start + searchValue.length;
        texts = [
          <Text key={`${item.text}_1`} style={styles.text}>{ item.text.slice(0, start) }</Text>,
          <Text key={`${item.text}_2`} style={[styles.text, styles.highLight]} >{ item.text.slice(start, end) }</Text>,
          <Text key={`${item.text}_3`} style={styles.text}>{ item.text.slice(end) }</Text>
        ];
      }


      return (
        <TouchableOpacity key={`${item.text}`} style={styles.item} onPress={() => {}}>
          { texts }
        </TouchableOpacity>
      );
    });
    return content;
  }

  render() {
    return (
      <View style={[styles.container]}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {}}
          style={[styles.mask, StyleSheet.absoluteFill]}
        />
        <ScrollView
          contentContainerStyle={styles.content}
        >

          { this.renderSuggests() }
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  mask: {
    backgroundColor: '#000000',
    opacity: 0.5
  },
  content: {
    backgroundColor: '#FFFFFF'
  },
  item: {
    padding: 20,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderColor: '#E5EBF0',
    flexDirection: 'row'
  },
  text: {
    fontSize: 16,
    color: '#4C5358'
  },
  highLight: {
    color: '#FF651E'
  }
});

export default Suggest;

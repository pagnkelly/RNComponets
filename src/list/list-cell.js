import React, { PureComponent } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import BarbellIcon from '../components/barbell-icon';

class ListCell extends PureComponent {
  componentDidMount() {
    // this.props.fetchList();
  }

  getCancelStyle = status => (status === 2 ? styles.textGray : null)

  jumpToDetial = () => {
    console.log('jumpToDetial');
  }

  renderTag = status => {
    const statusMap = {
      0: styles.tagOrange,
      1: styles.tagGreen,
      2: styles.tagGray
    };
    return (
      <View style={[styles.tag, statusMap[status]]}>
        <Text style={styles.tagText}>
            已拒绝
        </Text>
      </View>
    );
  }


  renderOrderNo = status => (
    <View style={styles.orderNo}>
      <Text style={[styles.orderNoText, this.getCancelStyle(status)]}>
            SFB4289929219012
      </Text>
    </View>
  )


  renderHotelInfo = status => {
    const cancelStyle = this.getCancelStyle(status);
    return (
      <View>
        <View>
          <Text numberOfLines={1} style={[styles.hotelName, cancelStyle]}>
              曼谷素坤逸希尔顿酒店
          </Text>
          <Text numberOfLines={1} style={[styles.hotelEnName, cancelStyle]}>
              Hilton Sukumvit Bangkok
          </Text>
        </View>
        <View>
          <Text numberOfLines={1} style={[styles.locationText, cancelStyle]}>
              泰国 曼谷 11 Hilton Sukumvit Bangkok，dwdwdwdwdwdwdwdwdw
          </Text>
        </View>
      </View>
    );
  }

  renderOrderInfo = status => {
    const cancelStyle = this.getCancelStyle(status);
    return (
      <View style={styles.orderInfo}>
        <View style={styles.gradient} />
        <Text style={[styles.roomName, cancelStyle]}>豪华行政大床房</Text>
        <View style={styles.checkInout}>
          <View style={styles.checkInOutWrap}>
            <Text style={[styles.checkTitle, cancelStyle]}>入住(当地时间)</Text>
            <Text style={[styles.checkTime, cancelStyle]}>2019/04/04</Text>
          </View>
          <View style={styles.night}>
            <Text style={[styles.nightText, cancelStyle]}>1晚</Text>
            <BarbellIcon style={styles.nightIcon} />
          </View>
          <View style={styles.checkInOutWrap}>
            <Text style={[styles.checkTitle, cancelStyle]}>离店(当地时间)</Text>
            <Text style={[styles.checkTime, cancelStyle]}>2019/04/04</Text>
          </View>
        </View>
      </View>
    );
  }

  render() {
    const { rowData, patchStyle } = this.props;
    const { status = 0 } = rowData;
    return (
      <TouchableOpacity onPress={this.jumpToDetial} style={[styles.container, patchStyle]}>
        <View>
          { this.renderTag(status) }
          { this.renderOrderNo(status) }
          { this.renderHotelInfo(status) }
          { this.renderOrderInfo(status) }
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFF',
    marginBottom: 4,
    position: 'relative'
  },
  textGray: {
    color: '#A5B1BC'
  },
  tag: {
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
    borderRadius: 3,
    backgroundColor: '#A5B1BC',
    padding: 6
  },
  tagText: {
    fontSize: 12,
    color: '#FFFFFF'
  },
  tagOrange: {
    backgroundColor: '#FF651E'
  },
  tagGreen: {
    backgroundColor: '#87CE50'
  },
  tagGray: {
    backgroundColor: '#A5B1BC'
  },
  orderNo: {
    paddingTop: 6,
    paddingBottom: 16
  },
  orderNoText: {
    fontSize: 12,
    color: '#4C5358',
    fontWeight: 'bold'
  },
  hotelName: {
    fontSize: 18,
    color: '#4C5358',
    fontWeight: 'bold'
  },
  hotelEnName: {
    fontSize: 14,
    color: '#002300'
  },
  locationText: {
    fontSize: 12,
    color: '#A5B1BC'
  },
  orderInfo: {
    marginTop: 15,
    paddingLeft: 20
  },
  roomName: {
    fontSize: 14,
    color: '#4C5358',
    marginBottom: 12
  },
  checkInout: {
    flexDirection: 'row'
  },
  checkTitle: {
    fontSize: 12,
    color: '#4C5358',
    marginBottom: 2
  },
  checkTime: {
    fontSize: 18,
    color: '#4C5358',
    fontWeight: 'bold'
  },
  night: {
    alignItems: 'center',
    marginLeft: 14,
    marginRight: 14
  },
  nightText: {
    fontSize: 12,
    color: '#4C5358',
    marginBottom: 5
  },
  gradient: {
    position: 'absolute',
    left: 0,
    width: 5,
    borderRadius: 5,
    height: 58,
    backgroundColor: 'lightblue'
  },
  nightIcon: {
    paddingTop: 6
  }
});

export default ListCell;

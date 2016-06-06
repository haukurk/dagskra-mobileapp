/* @flow */

import React, { Component } from 'react';
import { ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import { channelsConfig } from '@config/channels';
import LoadingView from '@components/LoadingView';
import Entypo from 'react-native-vector-icons/Entypo';
import moment from 'moment';
import styles from './styles';
import ReactNative from 'react-native';
const {
  Platform,
  Text,
  ListView,
  View,
  TouchableHighlight,
  Image,
  ActivityIndicatorIOS,
  ProgressBarAndroid,
} = ReactNative;

// Include Icelandic localle.
require('moment/locale/is');

class ProgrammeList extends Component {

  constructor(...args) {
     super(...args);
   }

  /**
   * Render loading screen
   * @return {Component}
   */
  _renderLoadingView() {
    return (
      <LoadingView loadingText="Hleð inn dagsskrá.." />
    );
  }

  /**
   *  This function was built as a workaround for the problem when concatinating strings within a require.
   */
  _getPictureForChannel(channel_key) {
    switch (channel_key) {
      case "ruv":
        return require('../../../images/channel_logos/RUV.gif');
      case "ruvithrottir":
        return require('../../../images/channel_logos/RUV.gif');
      case "stod2":
        return require('../../../images/channel_logos/STOD2.png');
      case "stod2sport":
        return require('../../../images/channel_logos/STOD2.png');
      case "stod2sport2":
        return require('../../../images/channel_logos/STOD2.png');
      case "stod2bio":
        return require('../../../images/channel_logos/STOD2.png');
      case "stod3":
        return require('../../../images/channel_logos/STOD3.png');
      case "ruv":
        return require('../../../images/channel_logos/RUV.gif');
      default:
        return require('../../../images/channel_logos/UNKNOWN.png');
    }
  }

  /**
     * Fired when list item is pressed
     * @param {object} Movie object
     * @return {void}
     */
    onPress(programme) {
      ToastAndroid.show(programme.title, ToastAndroid.SHORT);
    }

  /**
   * Render row method
   * @param {object} Movie object
   * @return {Component}
   */
  renderRow(programme) {

    // Set default localle to Icelandic.
    moment.locale('is');

    return (
        <TouchableHighlight
               underlayColor='#dddddd'
               onPress={() => this.onPress(programme)}>
             <View>
               <View style={styles.rowContainer}>
                 <Image style={styles.thumb}
                        source={this._getPictureForChannel(programme.channelkey)} />
                 <View style={styles.textContainer}>
                   <Text style={styles.title}>
                     {programme.channel}
                   </Text>
                   {this.props.showSinceDates &&
                     <Text style={styles.time}>
                       {"Byrjaði " + moment(programme.startDateTime).fromNow()}
                     </Text>
                   }
                   <Text style={styles.description}
                         numberOfLines={1}>{programme.title}</Text>
                   <Text style={styles.description}
                         numberOfLines={1}>
                        {moment(programme.startDateTime).format('LT') + " - " +
                        moment(programme.startDateTime).add(moment.duration(programme.duration)).format('LT')}
                   </Text>
                   <Text style={styles.description2}
                         numberOfLines={1}>{programme.description}</Text>
                 </View>
               </View>
               <View style={styles.separator}/>
             </View>
        </TouchableHighlight>
    );
  }

  render() {
    const { programmes, dispatch } = this.props;
    return (
        /*jshint ignore:start */
         <View style={{ flex: 1 }}>
         {programmes.length < 1 ? this._renderLoadingView() : (
              <ListView
                enableEmptySections={true}
                dataSource={programmesDataSource.cloneWithRows(programmes)}
                renderRow={this.renderRow.bind(this)}
                style={styles.container}
              />
        )}
        </View>
        /*jshint ignore:end */
    );
  }
}

const programmesDataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
});

export default ProgrammeList;

/* @flow */

import React, { Component } from 'react';
import { ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import { channelsConfig } from '@config/channels';
import LoadingView from '@components/LoadingView';
import Title from '@components/Title';
import TimerMixin from 'react-timer-mixin';
import reactMixin from 'react-mixin';
import PushNotification from 'react-native-push-notification';
import Entypo from 'react-native-vector-icons/Entypo';
import {Actions} from 'react-native-router-flux'


import styles from './styles';

var ReactNative = require('react-native');
var {
  Platform,
  Text,
  ListView,
  View,
  TouchableHighlight,
  Image,
  ActivityIndicatorIOS,
  ProgressBarAndroid,
} = ReactNative;

class ChannelList extends Component {

  constructor(...args) {
     super(...args);
   }

  /**
   * Render loading screen
   * @return {Component}
   */
  loading() {
    return (
      <LoadingView loadingText="Hleð inn sjónvarpstöðvum.." />
    );
  }

  /**
    * Fired when list item is pressed
    * @param {object} Channel object
    * @return {void}
    */
    onPress(channel) {
      Actions.channel({channelkey: channel.key, title: channel.title}); //TODO Move out of component have in container.
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
   * Render row method
   * @param {object} Movie object
   * @return {Component}
   */
  renderRow(channel) {
    return (
        <TouchableHighlight
               underlayColor='#dddddd'
               onPress={() => this.onPress(channel)}>
             <View>
               <View style={styles.rowContainer}>
                 <Image style={styles.thumb} source={this._getPictureForChannel(channel.key)} />
                 <View  style={styles.textContainer}>
                   <Text style={styles.title}>{channel.title}</Text>
                   <Text style={styles.description}
                         numberOfLines={1}>{channel.description}</Text>
                 </View>
               </View>
               <View style={styles.separator}/>
             </View>
        </TouchableHighlight>
    );
  }

  render() {
    const { channels, dispatch } = this.props;
    return (
        /*jshint ignore:start */
         <View style={{ flex: 1 }}>
         {channels.length < 1 ? this.loading() : (
              <ListView
                enableEmptySections={true}
                dataSource={channelDataSource.cloneWithRows(channels)}
                renderRow={this.renderRow.bind(this)}
                style={styles.container}
              />
        )}
        </View>
        /*jshint ignore:end */
    );
  }
}

const channelDataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
});

export default ChannelList;

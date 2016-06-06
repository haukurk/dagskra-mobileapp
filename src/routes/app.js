/* @flow */

import React from 'react';
import { listenToProgrammeChanges } from '@store/actions';
import { Navigator, View, Text } from 'react-native';
import { Router, Route, Scene, Schema } from 'react-native-router-flux';
import TabNavigator from 'react-native-tab-navigator';
import { styles } from '@components/NavigationBar';
import HomeContainer from '@containers/HomeContainer';
import CounterContainer from '@containers/CounterContainer';
import ChannelsContainer from '@containers/ChannelsContainer';
import ChannelScheduleContainer from '@containers/ChannelScheduleContainer';
import { connect } from 'react-redux';
const RouterWithRedux = connect()(Router);
import Entypo from 'react-native-vector-icons/Entypo';
import Firebase from 'firebase';
import StatusBar from '@components/StatusBar';
import {PRIMARY_TITLE_COLOR} from '@theme/colors';

class TabIcon extends React.Component {

    render(){

      var icon;
      var selColor = '#ddd';
      if(this.props.selected)
        selColor = PRIMARY_TITLE_COLOR;

      if(this.props.name === 'home') {
        icon = <Entypo style={{ alignSelf: 'center', marginRight: 5 }} name="controller-play" size={20} color={selColor} />
      }
      else if(this.props.name === 'channel_root') {
        icon = <Entypo style={{ alignSelf: 'center', marginRight: 5 }} name="tv" size={20} color={selColor} />
      }

        return (
          <View style={{ flexDirection: 'row' }}>
            {icon}
            <Text style={{color: selColor}}>{this.props.title}</Text>
          </View>
        );
    }
}

const routes = (

  /*jshint ignore:start */
  <RouterWithRedux
    navigationBarStyle={styles.navBar}
    titleStyle={styles.navBarTitle}
    barButtonTextStyle={styles.barButtonTextStyle}
    barButtonIconStyle={styles.barButtonIconStyle}
    style={styles.container}>

    <Scene key="main" tabs={true}>
      <Scene icon={TabIcon} key="home" name="home" component={HomeContainer} title="Í loftinu" initial={true} />
      <Scene key="channel_root" icon={TabIcon} key="channel_root" name="channel_root" title="Sjónvarpsstöðvar">
        <Scene icon={TabIcon} key="channels" name="channels" component={ChannelsContainer} title="Sjónvarpsstöðvar" />
        <Scene icon={TabIcon} key="channel" name="channel" component={ChannelScheduleContainer} title="Dagskrá" />
      </Scene>
    </Scene>

  </RouterWithRedux>
  /*jshint ignore:end */

);



export default routes;

/* @flow */

import _ from 'lodash';
import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Title from '@components/Title';
import Link from '@components/Link';
import Container from '@components/Container';
import StatusBar from '@components/StatusBar';
import ProgrammeList from '@components/ProgrammeList';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  setFirebaseUrl,
  listenToProgrammeChanges,
  replaceProgrammes,
  addChannel
} from '../../redux/actions';
import Firebase from 'firebase';
import { channelsConfig } from '@config/channels';
import { View } from 'react-native';
import { NAV_BACKGROUND_COLOR } from '@theme/colors';


/**
 *   Container for Home Scene. Shows what is currently airing on channels.
 */
class HomeContainer extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

      // Injected by react-redux:
      // TODO: do at root component.
      let { dispatch, getState } = this.props;
      let fireBaseAction = setFirebaseUrl("https://icelandic-tv-sched.firebaseio.com");
      dispatch(fireBaseAction);

      _(channelsConfig).forEach(function(channel) {
        dispatch(addChannel(channel));
      });

      dispatch(listenToProgrammeChanges());

      // Timer for component tick function.
      this.timer = setInterval(this._tick.bind(this), 2000);

  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  /**
   * This functions is called every 2 second. It rerenders the view to show live updates.
   */
  _tick() {
    this.forceUpdate();
  }

  /**
   * Function that filters programmes that are on air right now.
   * @param  {[array]} programmes [programmes that are given as props to the component]
   * @return {[array]} programmes [reduced array of programmes that only show the ones that are currently airing]
   */
  _filterProgrammes(programmes) {
    var _now = moment();

    return _.filter(
      _.sortBy(programmes, function(p) { return p.startDateUnix; }),
      function(o) {
        var _startTime = moment(o.startDateTime);
        var _duration = moment.duration(o.duration);
        return _now >= _startTime && _now <= _startTime.add(_duration);
      });
  }

  render() {
    const { programmes, dispatch } = this.props;

    return (
      /*jshint ignore:start */
      <Container>
        <StatusBar color={NAV_BACKGROUND_COLOR} />
        <ProgrammeList showSinceDates={true}
                       programmes={this._filterProgrammes(programmes)} />
      </Container>
      /*jshint ignore:end */
    )
  }
}

const mapStateToProps = (state) => {
  return {
      programmes: state.programmes
    };
};

export default connect(mapStateToProps)(HomeContainer);

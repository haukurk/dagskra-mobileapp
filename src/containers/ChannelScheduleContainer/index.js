/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProgrammeList from '@components/ProgrammeList';
import _ from 'lodash';

/**
 * Component that displays programmes for a channel.
 */
class ChannelScheduleContainer extends Component {

  constructor(props) {
    super(props);
  }

  /**
   * Filters programmes information for the channel in scope.
   * @param  {programmes} all programmes that are in the redux store.
   * @param  {string} key of the channel in scope
   * @return {programmes} filtered programmes
   */
  _filterForChannel(programmes, key) {
    return _.filter(
      _.sortBy(programmes, function(p) { return p.startDateUnix; }),
      function(o) {
        return o.channelkey == key;
      });
  }

  render() {
    const { channelkey, programmes, dispatch } = this.props;
    return (
        /*jshint ignore:start */
        <ProgrammeList showSinceDates={false} programmes={this._filterForChannel(programmes, channelkey)} />
        /*jshint ignore:end */
    );
  }
}

const mapStateToProps = (state) => {
  return {
      programmes: state.programmes
    };
};

export default connect(mapStateToProps)(ChannelScheduleContainer);

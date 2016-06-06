/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChannelList from '@components/ChannelList';

/**
 * Componen for listing all channels available.
 */
class ChannelContainer extends Component {

  render() {
    const { channels, dispatch } = this.props;
    return (
        /*jshint ignore:start */
        <ChannelList channels={channels} />
        /*jshint ignore:end */
    );
  }
}

const mapStateToProps = (state) => {
  return {
      channels: state.channels
    };
};

export default connect(mapStateToProps)(ChannelContainer);

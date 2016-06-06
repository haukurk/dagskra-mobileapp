/* @flow */

import React, { Element } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import StatusBar from '@components/StatusBar';
import { NAV_BACKGROUND_COLOR } from '@theme/colors';

type Props = {
  children: Element
};

const Container = (props: Props) => {
  const { children } = props;
  return (
    <View style={styles.container}>

      <StatusBar color={NAV_BACKGROUND_COLOR}></StatusBar>

      {children}

    </View>
  )
}

export default Container;

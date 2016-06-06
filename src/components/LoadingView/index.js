/* @flow */

import React from 'react';
import { Platform, ProgressBarAndroid, ActivityIndicatorIOS, View } from 'react-native';
import Title from '@components/Title';
import styles from './styles';

const LoadingView = (props) => {
  const { loadingText } = props;
  return (
    <View style={styles.container}>
      {(Platform.OS === 'ios') ? <ActivityIndicatorIOS style={{ height: 40 }} /> : null}
      {(Platform.OS === 'android') ? (
        <ProgressBarAndroid indeterminate styleAttr="Large" />
      ) : null}
      <Title>{loadingText}</Title>
    </View>
  );
}

export default LoadingView;

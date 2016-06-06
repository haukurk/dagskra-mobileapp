/* @flow */

import { StyleSheet } from 'react-native';
import { PRIMARY_COLOR, PRIMARY_COLOR_BLACK, NAV_BACKGROUND_COLOR } from '@theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navBar: {
    backgroundColor: NAV_BACKGROUND_COLOR,
    alignItems: 'center',
  },
  navBarTitle:{
      color:'#FFFFFF'
  },
  barButtonTextStyle:{
      color:'#FFFFFF'
  },
  barButtonIconStyle:{
      tintColor:'rgb(255,255,255)'
  }
});

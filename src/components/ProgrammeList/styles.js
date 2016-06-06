/* @flow */

import { StyleSheet } from 'react-native';
import { PRIMARY_TITLE_COLOR, PRIMARY_COLOR_BLACK, PRIMARY_TEXT_COLOR, LIGHT_TEXT_COLOR } from '@theme/colors';

export default StyleSheet.create({
  container: {
    marginTop: 60,
    backgroundColor: '#fff',
    marginBottom: 40
  },
  thumb: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  title: {
    fontSize: 25,
    fontWeight: 'normal',
    color: PRIMARY_COLOR_BLACK
  },
  description: {
    fontSize: 14,
    color: PRIMARY_TEXT_COLOR
  },
  description2: {
    fontSize: 9,
    color: PRIMARY_COLOR_BLACK
  },
  time: {
    fontSize: 11,
    color: LIGHT_TEXT_COLOR
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  }
});

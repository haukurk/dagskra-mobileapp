 /* @flow */
 import React from 'react';
 import { StatusBar } from 'react-native';

 type Props = {
   color: PropTypes.string
 };

 const StatusBarWrapper = (props) => {
   const { color } = props;
   return (
       <StatusBar
        backgroundColor={props.color}
        barStyle="light-content"
        />
    )
 };

 export default StatusBarWrapper;

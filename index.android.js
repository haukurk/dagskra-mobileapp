import {
  AppRegistry,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableWithoutFeedback,
  InteractionManager
} from 'react-native';

import Kernel from './src';
import PushNotification from 'react-native-push-notification';

PushNotification.configure({

    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function(token) {
        console.log( 'TOKEN:', token );
    },

    // (required) Called when a remote or local notification is opened or received
    onNotification: function(notification) {
        console.log( 'NOTIFICATION:', notification );
        ToastAndroid.show('This is a toast with short duration', ToastAndroid.SHORT);
    },

    // ANDROID ONLY: (optional) GCM Sender ID.
    senderID: "YOUR GCM SENDER ID",

    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
        alert: true,
        badge: true,
        sound: true
    },

    // Should the initial notification be popped automatically
    // default: true
    popInitialNotification: true,

});

AppRegistry.registerComponent('icelandtv', () => Kernel);

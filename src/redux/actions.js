import * as types from '@constants/actionTypes';

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_PAST: types.SHOW_PAST
};

/*
 * action creators
 */

 // actions/firebaseRef.js

export function setFirebaseUrl(url) {
   return {
     type: types.FIREBASE_URL_SET,
     value: url
   };
 }

 /**
  * Called every time the firebase ref changes
  */
 export function replaceProgrammes(programmes) {
   return {
     type: types.PROGRAMMES_REPLACE,
     value: programmes
   };
 }

 export function addChannel(channel) {
   return { type: types.CHANNEL_ADD, channel };
 }

 export function removeChannel(id) {
   return { type: types.CHANNEL_REMOVE, id };
 }

 export function editChannel(id, channel) {
   return { type: types.CHANNEL_EDIT, id, channel };
 }


/*
 * Support functions:
 */


 /**
  * Start listening to changes when the app boots
  */
 export function listenToProgrammeChanges() {
   return (dispatch, getState) => {

     const { firebaseUrl } = getState();

     var ref = new Firebase(firebaseUrl);
     ref.authWithPassword({
     email    : 'haukur@hauxi.is', // TODO: Put in config file. Issue a key for the app?
     password : 'l33tl33t'
     }, function(error, authData) {
     if (error) {
       console.log("Login Failed to Firebase!", error);
     } else {
       console.log("Authenticated successfully.");
     }
     });

     ref.child('programmes').on('value', (snapshot) => {
       dispatch(replaceProgrammes(snapshot.val()));
     });
   };
 }

 /*
  * Save new config data
  */
 //function saveProgrammes(programmes) {
 //  return (dispatch, getState) => {
 //    const { firebaseRef } = getState();
 //    firebaseRef.child('programmes').set(config);
 //    // no need for dispatch, it will trigger Firebase 'value', which will dispatch `replaceProgrammes`
 //  };
 //}

const initialState = null;

export default function firebaseRef(state = initialState, action) {
  switch (action.type) {
  case 'FIREBASE_URL_SET':
    return action.value;
  default:
    return state;
  }
}

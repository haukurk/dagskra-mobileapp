const initialState = {
   // Empty programmes initially.
};

export default function routes(state = initialState, action = {}) {
  switch (action.type) {
    case 'PROGRAMMES_REPLACE':
      return action.value;
    default:
      return state;
  }
}

import {
  CHANNEL_REMOVE,
  CHANNEL_ADD,
  CHANNEL_EDIT
} from '@constants/actionTypes';

const initialState = [
   // Empty programmes initially.
];

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {

    case CHANNEL_ADD:
      return [
        {
          id: state.reduce(
            (maxId, channel) => Math.max(channel.id, maxId), -1
          ) + 1,
          title: action.channel.title,
          description: action.channel.description,
          key: action.channel.key,
          logo: action.channel.logo
        },
        ...state
      ];

    case CHANNEL_REMOVE:
      return state.filter(channel =>
        channel.id !== action.id
      );

    case CHANNEL_EDIT:
      return state.map(channel =>
       channel.id === action.id ?
         Object.assign({}, channel, {
           title: action.channel.title,
           description: action.channel.description,
           key: action.channel.key,
           logo: action.channel.logo }
         ) : channel
     );

    default:
      return state;
  }
}

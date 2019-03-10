import {
  ACTIONS
} from '../actions/Barbecue';

export const initialState = {
  name: '',
  model: '',
  description: '',
  latitude: '',
  longitude: '',
  image: '',
  barbecues: []
};

const Barbecue = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.REGISTER_BARBECUE:
      return {
        ...state,
      };
    case ACTIONS.GET_BARBECUE:
      return {
        ...state,
        barbecues: action.payload
      };
    default:
      return state;
  }
};

export default Barbecue;
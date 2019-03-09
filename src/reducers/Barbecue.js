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
};

const Barbecue = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.REGISTER_BARBECUE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default Barbecue;
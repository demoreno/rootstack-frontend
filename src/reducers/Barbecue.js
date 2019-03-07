import { ACTIONS } from '../actions/Barbecue';

const initialState = {
  name: '',
  model: '',
  description: '',
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

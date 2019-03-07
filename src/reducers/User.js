import { ACTIONS } from '../actions/User';

const initialState = {
  firstName: '',
  lastName: '',
  zipCode: '',
  email: '',
};

const User = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.REGISTER_USER:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default User;

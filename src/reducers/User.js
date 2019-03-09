import {
  ACTIONS
} from '../actions/User';

export const initialState = {
  firstName: '',
  lastName: '',
  zipCode: '',
  email: '',
  userData: []
};

const User = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.REGISTER_USER:
      return {
        ...state,
      };
    case ACTIONS.LOGIN:
      return {
        ...state,
        userData: action.payload
      };
    case ACTIONS.LOGOUT:
      return {
        ...state,
        userData: []
      };
    default:
      return state;
  }
};

export default User;
import {
  ACTIONS
} from '../actions/Global';

const initialState = {
  alert: {},
  position: {}
};

const Global = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.CREATE_ALERT:
      return {
        ...state,
        alert: action.payload,
      };
    case ACTIONS.SET_POSITION:
      return {
        ...state,
        position: action.payload
      }
    default:
      return state;
  }
};

export default Global;
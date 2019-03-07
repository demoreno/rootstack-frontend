import { ACTIONS } from '../actions/Global';

const initialState = {
  alert: {},
};

const Global = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.CREATE_ALERT:
      console.log('create');
      console.log(action.payload);
      return {
        ...state,
        alert: action.payload,
      };
    default:
      return state;
  }
};

export default Global;

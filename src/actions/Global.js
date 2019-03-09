export const ACTIONS = {
  CREATE_ALERT: 'CREATE_ALERT',
  SET_POSITION: 'SET_POSITION'
};

export function setPosition(position) {
  return dispatch => {
    dispatch({
      type: ACTIONS.SET_POSITION,
      payload: position,
    });
  };
}
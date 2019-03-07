export const ACTIONS = {
  REGISTER_USER: 'REGISTER_USER',
};

export function addUser(data) {
  console.log('here 213789');
  console.log(data);
  return dispatch => {
    dispatch({
      type: ACTIONS.REGISTER_USER,
      payload: data,
    });
  };
}

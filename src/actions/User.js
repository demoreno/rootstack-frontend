import axios from 'axios';

export const ACTIONS = {
  REGISTER_USER: 'REGISTER_USER',
};

export function addUser(data) {
  return dispatch => {
    axios
      .post('http://localhost:8080/users/signup', {
        data,
        timeout: 10000
      }, )
      .then(response => {
        dispatch({
          type: ACTIONS.REGISTER_USER,
          payload: data.data,
        });

        dispatch({
          type: 'CREATE_ALERT',
          payload: {
            type: 'success',
            message: response.data.message
          },
        });
      })
      .catch(err => {
        dispatch({
          type: 'CREATE_ALERT',
          payload: {
            type: 'danger',
            message: 'Error'
          },
        });
      });
  };
}
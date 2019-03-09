import axios from 'axios';

export const ACTIONS = {
  REGISTER_USER: 'REGISTER_USER',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT'
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

export function login(data) {
  return dispatch => {
    axios
      .post('http://localhost:8080/users/signin', {
        data,
        timeout: 10000
      }, )
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
          dispatch({
            type: ACTIONS.LOGIN,
            payload: {
              user: response.data.data,
              token: response.data.token
            },
          });

          window.location.replace('/');

        } else {
          dispatch({
            type: 'CREATE_ALERT',
            payload: {
              type: 'danger',
              message: response.data.message
            },
          });
        }
      })
      .catch(err => {
        dispatch({
          type: 'CREATE_ALERT',
          payload: {
            type: 'danger',
            message: err.data.message
          },
        });
      });
  };
}


export function logout() {
  return dispatch => {
    localStorage.removeItem('token');
    dispatch({
      type: ACTIONS.LOGOUT,
      payload: {},
    });
    window.location.replace('/');
  }
}
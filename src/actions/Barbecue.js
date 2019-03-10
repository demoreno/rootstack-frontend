import axios from 'axios';

export const ACTIONS = {
  REGISTER_BARBECUE: 'REGISTER_BARBECUE',
  CREATE_ALERT: 'CREATE_ALERT',
  GET_BARBECUE: 'GET_BARBECUE',
};

export function addBarbecue(data) {
  return dispatch => {

    axios
      .post('http://localhost:8080/barbecue', {
        data,
        timeout: 10000
      }, )
      .then(response => {
        dispatch({
          type: ACTIONS.REGISTER_BARBECUE,
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

export function getBarbecues(latitude, longitude) {
  return dispatch => {
    axios
      .get('http://localhost:8080/barbecue', {
        params: {
          latitude: latitude,
          longitude: longitude
        },
        timeout: 10000
      }, )
      .then(response => {
        dispatch({
          type: ACTIONS.GET_BARBECUE,
          payload: response.data.data,
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
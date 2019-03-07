import axios from 'axios';

export const ACTIONS = {
  REGISTER_BARBECUE: 'REGISTER_BARBECUE',
  CREATE_ALERT: 'CREATE_ALERT',
};

export function addBarbecue(data) {
  return dispatch => {
    dispatch({
      type: ACTIONS.REGISTER_BARBECUE,
      payload: data,
    });
  };
}

export function getBarbecues(latitude, longitude) {
  return dispatch => {
    axios
      .get('http://localhost:8080/barbecues')
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log('error');
        dispatch({
          type: 'CREATE_ALERT',
          payload: { type: 'danger', message: 'Error' },
        });
      });
  };
}

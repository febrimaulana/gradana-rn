import axios from 'axios';
import {reducer, server} from '../../../constants';
import {showError} from '../../../utils';

export const getUser = () => dispatch => {
  return new Promise(resolve => {
    dispatch({type: reducer.REFRESH, value: true});
    axios
      .get(`${server.BASE_URL}user`, {
        headers: {
          'app-id': server.appID,
        },
      })
      .then(result => {
        dispatch({type: reducer.REFRESH, value: false});
        resolve(result.data);
      })
      .catch(() => {
        dispatch({type: reducer.REFRESH, value: false});
        showError('Internal Server Error');
      });
  });
};

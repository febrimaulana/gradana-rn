import axios from 'axios';
import {reducer, server} from '../../../constants';
import {showError} from '../../../utils';

export const getProvinsi = () => dispatch => {
  return new Promise(resolve => {
    dispatch({type: reducer.REFRESH, value: true});
    axios
      .get(`${server.daerah}provinsi`)
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

export const getKabupaten = id => dispatch => {
  return new Promise(resolve => {
    dispatch({type: reducer.REFRESH, value: true});
    axios
      .get(`${server.daerah}kota?id_provinsi=${id}`)
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

export const getKecamatan = id => dispatch => {
  return new Promise(resolve => {
    dispatch({type: reducer.REFRESH, value: true});
    axios
      .get(`${server.daerah}kecamatan?id_kota=${id}`)
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

export const getKelurahan = id => dispatch => {
  return new Promise(resolve => {
    dispatch({type: reducer.REFRESH, value: true});
    axios
      .get(`${server.daerah}kelurahan?id_kecamatan=${id}`)
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

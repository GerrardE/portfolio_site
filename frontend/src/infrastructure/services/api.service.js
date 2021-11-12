import axios from 'axios';
import errorHandler from './error.service';

axios.defaults.baseURL = process.env.GATSBY_API_HOST;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export const getResource = (path) => {
  return new Promise((resolve, reject) => {
    axios.get(`${path}`)
      .then(response => {  resolve(response) })
      .catch(error => { reject(errorHandler(error)) });
  });
};

export const postResource = (path, body) => {
  return new Promise((resolve, reject) => {
    axios.post(`${path}`, body)
      .then(response => {  resolve(response) })
      .catch(error => { reject(errorHandler(error)) });
  });
};

export const putResource = (path, body) => {
  return new Promise((resolve, reject) => {
    axios.put(`${path}`, body)
      .then(response => {  resolve(response) })
      .catch(error => { reject(errorHandler(error)) });
  });
};

export const deleteResource = (path) => {
  return new Promise((resolve, reject) => {
    axios.delete(`${path}`)
      .then(response => {  resolve(response) })
      .catch(error => { reject(errorHandler(error)) });
  });
};

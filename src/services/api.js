import axios from 'axios';

export const Api = axios.create({
  baseURL: 'https://5fb95ecf2f145f0016c3ce39.mockapi.io/api'
});

export default Api;

import axios from 'axios';
import { API_SERVER_BASE_URL } from '../Config';

const AxiosModule = () => {
  const token = localStorage.getItem('access_token');
  return axios.create({
    baseURL: API_SERVER_BASE_URL,
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
};

const HTTP = AxiosModule();
export default HTTP;

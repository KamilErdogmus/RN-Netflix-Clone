import axios from 'axios';

export const Client = axios.create();
Client.defaults.baseURL = BASE_URL;
Client.defaults.headers = {
  accept: 'application/json',
  'Content-Type': 'application/json',
};

import axios from 'axios';
import {API_KEY, token} from '../utils/helpers';
import {BASE_URL} from './url';

export const Client = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

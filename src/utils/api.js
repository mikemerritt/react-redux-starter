import axios from 'axios';

const headers = {
  'X-Requested-With': 'XMLHttpRequest',
  Accept: 'application/vnd.api+json, application/json, text/plain'
};

// Using JWT for authentication. Include the auth header if an auth token is set.
if (window.localStorage.getItem('authToken')) {
  headers.Authorization = `Bearer ${window.localStorage.getItem('authToken')}`;
}

const ApiRequest = axios.create({
  baseURL: 'http://localhost:3000/',
  headers
});

// All used API routes should be set here so they can be referenced without using raw paths.
export const ApiRoutes = {};

export default ApiRequest;

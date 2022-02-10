import axios from 'axios';

const getHttpClient = () => {
  try {
    if (!process.env.REACT_APP_API_URL) {
      throw new Error('No API URL provided');
    }

    const http = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
    });

    return http;
  } catch (err) {
    const msg = err.message || err.error || 'Unexpected error with http client';
    console.log(msg);
    return null;
  }
};

const http = getHttpClient();

const setDefaultHeaders = (header, value) => {
  if (!http) return;
  http.defaults.headers[header] = value;
};

const removeDefaultHeaders = (header) => {
  delete http.defaults.headers[header];
};

export { http, setDefaultHeaders, removeDefaultHeaders };

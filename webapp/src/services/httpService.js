import {
  http,
  setDefaultHeaders,
  removeDefaultHeaders,
} from '../clients/httpClient';

const register = async (payload) => {
  const url = '/auth/register';
  const response = await http.post(url, payload);
  return response.data;
};

const signIn = async (payload) => {
  const url = '/auth/signin';
  const response = await http.post(url, payload);
  return response.data;
};

const detectFace = async (imgUrl) => {
  const url = `/image/detect?img=${imgUrl}`;
  const response = await http.get(url);
  return response.data;
};

const updateImageCount = async (userId) => {
  const url = `/user/${userId}/image`;
  const response = await http.patch(url);
  return response.data;
};

export { register, signIn, detectFace, updateImageCount };

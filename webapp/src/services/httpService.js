import { http } from '../clients/httpClient';
import { setDefaultHeaders } from '../clients/httpClient';

const register = async (payload) => {
  const url = '/auth/register';
  const response = await http.post(url, payload);
  setDefaultHeaders('Authorization', response.data.token);
  return response.data;
};

const signIn = async (payload) => {
  const url = '/auth/signin';
  const response = await http.post(url, payload);
  setDefaultHeaders('Authorization', response.data.token);
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

const getUserData = async (userId) => {
  const url = `/user/${userId}`;
  const response = await http.get(url);
  return response.data;
};

export { register, signIn, detectFace, updateImageCount, getUserData };

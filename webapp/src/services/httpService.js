import {
  http,
  setDefaultHeaders,
  removeDefaultHeaders,
} from '../clients/httpClient';

const detectFace = async (imgUrl) => {
  const url = `/image/detect?img=${imgUrl}`;
  const response = await http.get(url);
  return response.data;
};

export { detectFace };

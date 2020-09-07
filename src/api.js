import axios from "axios";


export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: `https://reqres.in/api/unknown?per_page=12`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

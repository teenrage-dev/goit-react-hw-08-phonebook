import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  return (instance.defaults.headers.common.authorization = '');
};

export const signUp = async params => {
  const { data } = await instance.post('/users/signup', params);

  setToken(data.token);
  return data;
};

export const logIn = async params => {
  const { data } = await instance.post('/users/login', params);

  setToken(data.token);
  return data;
};

export const logOut = async () => {
  const data = await instance.post('/users/logout');
  setToken();
  return data;
};

export const getCurrent = async token => {
  try {
    setToken(token);
    const { data } = await instance.get('/users/current');

    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

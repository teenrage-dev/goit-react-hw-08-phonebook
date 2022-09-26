import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const signUp = async params => {
  const { data } = await instance.post('/users/signup', params);
  return data;
};

export const logIn = async params => {
  const { data } = await instance.post('/users/login', params);
  return data;
};

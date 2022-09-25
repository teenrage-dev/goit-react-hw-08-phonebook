import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://631cd9f64fa7d3264cb81275.mockapi.io/contacts',
});

export const getContacts = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const addContact = async res => {
  const { data } = await instance.post('/', res);
  console.log(data);
  return data;
};

export const removeContact = async id => {
  const { data } = await instance.delete(`/${id}`);
  console.log(data);
  return data;
};

import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../shared/api/auth';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.signUp(data);
      console.log(data);
      return result;
    } catch ({ response }) {
      const { status, data } = response;
      let error = null;
      if (data.message === undefined) {
        error = {
          status,
          message: 'This email is registered',
        };
        return rejectWithValue(error);
      }
      error = {
        status,
        message: data.message,
      };

      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.logIn(data);
      console.log(data);
      return result;
    } catch ({ response }) {
      const { status, data } = response;
      let error = null;
      if (data.message === undefined) {
        error = {
          status,
          message: 'This email is registered',
        };
        return rejectWithValue(error);
      }
      error = {
        status,
        message: data.message,
      };

      console.log(error);
      return rejectWithValue(error);
    }
  }
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../shared/api/auth';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.signUp(data);

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

      return rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.logIn(data);

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

      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.logOut();
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

      return rejectWithValue(error);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = await getState();
      const result = await api.getCurrent(auth.token);
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

      return rejectWithValue(error);
    }
  }
);

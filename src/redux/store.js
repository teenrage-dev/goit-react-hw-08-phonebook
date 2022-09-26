import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth/auth-slice';
import itemsReducer from './items/items-reducer';
import filterReducer from './filter/filter-slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    items: itemsReducer,
    filter: filterReducer,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';

import itemsReducer from './items/items-reducer';
import filterReducer from './filter/filter-slice';

const store = configureStore({
  reducer: {
    items: itemsReducer,
    filter: filterReducer,
  },
});

export default store;

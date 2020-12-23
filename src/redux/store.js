import { configureStore } from '@reduxjs/toolkit';
import directoryReducer from './directorySlice';

const rootReducer = {
  directory: directoryReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

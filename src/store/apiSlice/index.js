import { configureStore } from '@reduxjs/toolkit';
import generalSlice from './apiSlice';
const store = configureStore({
  reducer: { generaStore: generalSlice.reducer },
});
export default store;

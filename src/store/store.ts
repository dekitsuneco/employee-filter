import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { apiService } from '../modules/services';
import { filterSlice } from './reducers/FilterSlice';

const filterReducer = filterSlice.reducer;

const rootReducer = combineReducers({
  filterReducer,
  [apiService.reducerPath]: apiService.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware),
});

type RootState = ReturnType<typeof rootReducer>;
type AppStore = typeof store;
type AppDispatch = AppStore['dispatch'];

export type { RootState, AppStore, AppDispatch };
export { store };

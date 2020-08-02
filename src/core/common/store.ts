import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import reducer, { AppState } from './rootReducer';

export const createStore = (initialState?: AppState) =>
  configureStore({ reducer: reducer, preloadedState: initialState });

const store = createStore();

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, AppState, unknown, Action<string>>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

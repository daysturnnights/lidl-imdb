import { AppState } from '@core/common/rootReducer';

declare global {
  interface Window {
    __REDUX_STATE__: AppState;
  }
}

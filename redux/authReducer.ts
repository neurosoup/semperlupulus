import { produce } from 'immer';
import { initialState } from './initialState';
import { Action } from './types';
import { AppState, Auth } from './types';

export default (state: AppState = initialState, action: Action<Auth>) => {
  switch (action.type) {
    case 'AUTH_SIGNED_UP':
      return produce(state, draft => {
        draft.auth.user = action.payload!.user;
        draft.auth.status = action.payload!.status;
      });
    case 'AUTH_ERROR':
      return produce(state, draft => {
        draft.auth.error = action.payload!.error;
      });
    default:
      return state;
  }
};

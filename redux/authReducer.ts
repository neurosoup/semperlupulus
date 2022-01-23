import { produce } from 'immer';
import { initialState } from './initialState';
import { Action } from './types';
import { RootState, Auth } from './types';

export default (state: RootState = initialState, action: Action<Auth>) => {
  switch (action.type) {
    case 'AUTH_SIGN_UP':
      return produce(state, draft => {
        draft.user.cognitoUser = action.payload?.cognitoUser;
      });
    case 'AUTH_ERROR':
      return produce(state, draft => {
        draft.user.error = action.payload?.error;
      });
    default:
      return state;
  }
};

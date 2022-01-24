import { CognitoUser } from '@aws-amplify/auth';
import { signUp } from '../authentication/signup';
import { Action, AsyncActionCreator, Auth, AppState, Status } from './types';

export type AuthActionTypes =
  | 'AUTH_PROCESSING'
  | 'AUTH_SIGN_UP'
  | 'AUTH_SIGNED_UP'
  | 'AUTH_SIGN_IN'
  | 'AUTH_SIGNED_IN'
  | 'AUTH_CONFIRM'
  | 'AUTH_CONFIRMED'
  | 'AUTH_ERROR';

const authProcessing = (): Action<Auth> => ({ type: 'AUTH_PROCESSING', payload: { status: Status.Loading } });
const authSignedUp = (user?: CognitoUser): Action<Auth> => ({ type: 'AUTH_SIGNED_UP', payload: { user, error: undefined, status: Status.Idle } });
const authError = (error?: Error): Action<Auth> => ({ type: 'AUTH_ERROR', payload: { error, status: Status.Error } });

export const authSignUp: AsyncActionCreator<Auth> = (username: string, password: string) => async (dispatch, getState) => {
  try {
    dispatch(authProcessing());
    const user = await signUp(username, password);
    if (user) {
      dispatch(authSignedUp(user));
    } else {
      dispatch(authError(new Error('Something went wrong while signing up: no user returned !')));
    }
  } catch (error) {
    dispatch(authError(error as Error));
  }
};

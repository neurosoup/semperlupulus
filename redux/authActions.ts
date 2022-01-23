import { CognitoUser } from '@aws-amplify/auth';
import { signUp } from '../authentication/signup';
import { Action, AsyncActionCreator, Auth, RootState } from './types';

export type AuthActionTypes =
  | 'AUTH_SIGN_UP'
  | 'AUTH_SIGNING_UP'
  | 'AUTH_SIGNED_UP'
  | 'AUTH_SIGN_UP_ERROR'
  | 'AUTH_SIGN_IN'
  | 'AUTH_SIGNING_IN'
  | 'AUTH_SIGNED_IN'
  | 'AUTH_CONFIRM'
  | 'AUTH_CONFIRMING'
  | 'AUTH_CONFIRMED'
  | 'AUTH_ERROR';

const authSigningUp = (): Action<Auth> => ({ type: 'AUTH_SIGNING_UP' });
const authSignedUp = (user?: CognitoUser): Action<Auth> => ({ type: 'AUTH_SIGNED_UP', payload: { cognitoUser: user } });
const authError = (error?: Error): Action<Auth> => ({ type: 'AUTH_ERROR', payload: { error } });

export const authSignUp: AsyncActionCreator<Auth> = (username: string, password: string) => async (dispatch, getState) => {
  try {
    dispatch(authSigningUp());
    const user = await signUp(username, password);
    dispatch(authSignedUp(user));
    dispatch(authError(undefined));
  } catch (error) {
    dispatch(authError(error as Error));
  }
};

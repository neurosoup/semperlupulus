import { CognitoUser } from '@aws-amplify/auth';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { AuthActionTypes } from './authActions';
import { store } from './store';

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = <T>() => useDispatch<Dispatch<Action<T> | Function>>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

type ActionTypes = AuthActionTypes;

export type AsyncActionCreator<T, S = RootState> = (...args: any[]) => (dispatch: Dispatch<Action<T>>, getState: () => S) => void | Promise<void>;
export type ActionCreator<T> = (...args: any[]) => Action<T>;

export interface Action<T> {
  type: ActionTypes;
  payload?: T;
}

export interface IError {
  error?: Error;
}

export interface RootState {
  user: Auth;
}

export interface Auth extends IError {
  cognitoUser?: CognitoUser;
  userConfirmed?: boolean;
  signedUp?: boolean;
}

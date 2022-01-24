import { CognitoUser } from '@aws-amplify/auth';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { AuthActionTypes } from './authActions';
import { store } from './store';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = <T>() => useDispatch<Dispatch<Action<T> | Function>>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

type ActionTypes = AuthActionTypes;

export type AsyncActionCreator<T, S = AppState> = (...args: any[]) => (dispatch: Dispatch<Action<T>>, getState: () => S) => void | Promise<void>;
export type ActionCreator<T> = (...args: any[]) => Action<T>;

export interface Action<T> {
  type: ActionTypes;
  payload?: T;
}

export enum Status {
  Idle,
  Loading,
  Error,
}
export interface IStatus {
  status: Status;
  error?: Error;
}

export interface AppState {
  auth: Auth;
}

export interface Auth extends IStatus {
  user?: CognitoUser;
  confirmed?: boolean;
}

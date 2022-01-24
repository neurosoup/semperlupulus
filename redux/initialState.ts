import { AppState, Status } from './types';

export const initialState: AppState = {
  auth: { status: Status.Idle },
};

import { createReducer, on, Action } from '@ngrx/store';
import { initialAppState, IApp } from '../../app.interface';
import { login } from '../actions/app.actions';


export const reducer = createReducer(
  initialAppState as IApp,
  on(login, (state,payload) => ({
    ...state,
  })),

);

export function AppReducer(state: IApp | undefined, action: Action): IApp {
  return reducer(state as IApp , action as Action);
}
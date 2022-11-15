import { createSelector } from '@ngrx/store';
import { IAppState } from 'src/app/app.interface';
 

 
export const selectFeature = (state: IAppState) => state;
 
export const selectAppState = createSelector(
  selectFeature,
  (state: IAppState) => state.AppState
);
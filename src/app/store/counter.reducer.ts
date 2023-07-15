import { createReducer, on } from '@ngrx/store';
import { increment } from './counter.actions';

const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  // в action попадає наша data з функції props
  on(increment, (state,action)=>state+action.value)
);

// export function counterReducer(state=initialState) {
//   return initialState
// }
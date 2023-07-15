import { createReducer, on } from '@ngrx/store';
import { increment } from './counter.actions';

const initialState = 0;
// створення редюсер він потім викидує оновлені дані

export const counterReducer = createReducer(
  initialState,
  // ф-я яка працює з action при тому буде виконуватися колбек
  on(increment, (state)=>state+1)
);

// export function counterReducer(state=initialState) {
//   return initialState
// }
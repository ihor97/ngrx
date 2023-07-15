import { createReducer } from '@ngrx/store';

const initialState = 0;
// створення редюсер він потім викидує оновлені дані
// export const counterReducer = createReducer(
//   initialState
// );

export function counterReducer(state=initialState) {
  return initialState
}
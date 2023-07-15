import { Action, createReducer, on } from '@ngrx/store';
import {  decrement, increment, set } from './counter.actions';
// import { increment } from './counter.actions';

const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  // в action попадає наша data з функції props
  on(increment, (state,action)=>state+action.value),
  on(decrement,(state,action)=>state+action.value),
  on(set,(state,action)=>action.value))


// counterReducer виконується для будь якої action яка відправляється
// export function counterReducer(state=initialState,action:CounterActions | Action) {
//   // action.type це є ключ в actions
//   // ми добавили типи для того щоб менще було потім помилок
//   if(action.type===INCREMENT){
//     // тут ми кастуємо
//     return state+(action as incrementAction).value
//   }
//   if(action.type===DECREMENT){
//     return state+(action as decrementAction ).value
//   }
//   return initialState
// }
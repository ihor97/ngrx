import { Action, createReducer, on } from '@ngrx/store';
import { CounterActions, INCREMENT, incrementAction } from './counter.actions';
// import { increment } from './counter.actions';

const initialState = 0;

// export const counterReducer = createReducer(
//   initialState,
//   // в action попадає наша data з функції props
//   on(increment, (state,action)=>state+action.value)
// );

// counterReducer виконується для будь якої action яка відправляється
export function counterReducer(state=initialState,action:CounterActions | Action) {
  // action.type це є ключ в actions
  // ми добавили типи для того щоб менще було потім помилок
  if(action.type===INCREMENT){
    // тут ми кастуємо
    return state+(action as incrementAction).value
  }
  return initialState
}
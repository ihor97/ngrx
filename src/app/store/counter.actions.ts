import { Action, createAction, props } from "@ngrx/store";


// increment() - є фунцкія яка вертає обєкт {type,value}
// export const increment=createAction(
//     '[Counter] increment',
//     // дозволяє добавляти якісь дані до action
//     props<{value: number}>()
// )

export const INCREMENT='[Counter] increment'
// альтернптива ф-ї createAction
export class incrementAction implements Action{
 readonly type=    '[Counter] increment';

 constructor(public value:number){

 }
 

}
// тут ми можемо робити типи з подіями 
export type CounterActions=incrementAction 

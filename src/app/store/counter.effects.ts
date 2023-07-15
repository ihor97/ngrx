import { Actions, createEffect, ofType} from "@ngrx/effects";
import { decrement, increment } from "./counter.actions";
import { tap } from "rxjs";
import { Injectable } from "@angular/core";
// export class CounterEffects{

//     constructor(private actions$:Actions){}
//     // actions$ емітить нам значення коли в аппці action відправляється
//     saveCount=createEffect(()=> this.actions$.pipe(
//         ofType(increment,decrement ),
//         tap((action)=>{
//             console.log(action);
//             localStorage.setItem('count',action.value.toString())
//         })
//         // мусимо поставити false щоб вказує на те що не буде відправлятися новий action 
//     ),{dispatch:false})
// }



@Injectable()
export class CounterEffects{
    constructor(private actions$:Actions){}
// старий варіант
    // @Effect({dispatch:false})
    
    saveCount=createEffect(()=> this.actions$.pipe(
        ofType(increment,decrement ),
        tap((action)=>{
            console.log(action);
            localStorage.setItem('count',action.value.toString())
        })
    ),{dispatch:false})
}
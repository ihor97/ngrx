import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decrement, increment } from "./counter.actions";
import { tap } from "rxjs";
export class CounterEffects{

    constructor(private actions$:Actions){}
    // actions$ емітить нам значення коли в аппці action відправляється
    saveCount=createEffect(()=> this.actions$.pipe(
        ofType(increment,decrement ),
        tap((action)=>{
            console.log(action);
            localStorage.setItem('count',action.value.toString())
        })
        // мусимо поставити false щоб вказує на те що не буде відправлятися новий action 
    ),{dispatch:false})
}
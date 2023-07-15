import { Actions, createEffect, ofType} from "@ngrx/effects";
import { decrement, increment } from "./counter.actions";
import { tap, withLatestFrom } from "rxjs";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

@Injectable()
export class CounterEffects{
    constructor(private actions$:Actions, private store:Store<{counter:number}>){}
// старий варіант
    // @Effect({dispatch:false})
    
    saveCount=createEffect(()=> this.actions$.pipe(
        ofType(increment,decrement ),
        // в цей оператор ми кладемо значення яке буде доступне в наступному операторі
        withLatestFrom(this.store.select('counter'))
        // як дату ми отримуємо масив з двох значень
        // таким чином в counter приходить 
        ,tap(([action,counter])=>{
            console.log(action);
            localStorage.setItem('count',counter.toString())
        })
    ),{dispatch:false})
}
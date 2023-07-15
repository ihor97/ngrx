import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decrement, increment, init, set } from "./counter.actions";
import { of, switchMap, tap, withLatestFrom } from "rxjs";
import { Injectable } from "@angular/core";
import { Store, createAction, props } from "@ngrx/store";



@Injectable()
export class CounterEffects {
    loadCount = createEffect(() => this.actions$.pipe(
        // буде автоматично підгружати зі сковища counter
        ofType(init),
        switchMap(() => {
            const storedCounter = localStorage.getItem('count')
            if (storedCounter) {
                // так як set не є Observable ми його обгортаємо використовуючи оператор of який перетворює його на обзервебл
                return of (set({ value: +storedCounter }))
            }
          return  of (set({value:0}))
        })
    ))


    constructor(private actions$: Actions, private store: Store<{ counter: number }>) { }
    // старий варіант
    // @Effect({dispatch:false})

    saveCount = createEffect(() => this.actions$.pipe(
        ofType(increment, decrement),
        // в цей оператор ми кладемо значення яке буде доступне в наступному операторі
        withLatestFrom(this.store.select('counter'))
        // як дату ми отримуємо масив з двох значень
        // таким чином в counter приходить 
        , tap(([action, counter]) => {
            console.log(action);
            localStorage.setItem('count', counter.toString())
        })
    ), { dispatch: false })
}
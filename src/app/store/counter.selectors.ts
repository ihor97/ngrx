// state:{counter:number}   імя counter має збішатися з тим що ми прописали в app.module

import { createSelector } from "@ngrx/store"

export const selectCount= (state:{counter:number})=>state.counter
// дозволяє комбінувати селектори
export const selectDoubleCount=createSelector(
    selectCount,
    (state:number)=> state*2
)
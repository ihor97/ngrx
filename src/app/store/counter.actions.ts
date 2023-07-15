import { createAction } from "@ngrx/store";
// action - дії які покликані для того аби працювати з store
export const increment=createAction(
    // [Counter] конвенція для називання action
    '[Counter] increment'
)
import { createAction, props } from "@ngrx/store";

export const increment=createAction(
    '[Counter] increment',
    // дозволяє добавляти якісь дані до action
    props<{value: number}>()
)
// state стан перед тим як дані були змінені

import { Action } from "@ngrx/store";
import { Ingredient } from "../shared/ingredient.model";

const initialState={
ingredients : [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ]
}
export function shoppingListReducer(state=initialState,action:Action) {
    switch (action.type) {
        case 'ADD_INGREDIENT':
            // нам не дозволено рухати state 
            return {
                ...state,
                ingredients:[...state.ingredients,action]
            }
            break;
    
        default:
            break;
    }
}
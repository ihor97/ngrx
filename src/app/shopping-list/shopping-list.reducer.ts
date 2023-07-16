// state стан перед тим як дані були змінені

import { Ingredient } from "../shared/ingredient.model";

const initialState={
ingredients : [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ]
}
export function shoppingListReducer(state=initialState,action) {
    
}
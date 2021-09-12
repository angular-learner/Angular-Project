import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    recipes : Recipe[]=[
  new Recipe('burger','this is a simple text', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg',[
      new Ingredient('bread' , 1),
      new Ingredient('fries', 20)
  ]),
  new Recipe('big fat fish','this is a simple text', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg',[
    new Ingredient('fish' , 1),
    new Ingredient('fries', 20)
  ])
];
constructor(private slService: ShoppingListService){}
// recipeSelected = new EventEmitter<Recipe>();

getRecipes(){
    return this.recipes.slice();
}

getRecipe(index: number){
return this.recipes[index]
}
addIngredientsToSL(ingredients: Ingredient[]){
this.slService.addIngredients(ingredients)
}
}
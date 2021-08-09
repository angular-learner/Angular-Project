import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

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

// recipeSelected = new EventEmitter<Recipe>();

getRecipes(){
    return this.recipes.slice();
}

}
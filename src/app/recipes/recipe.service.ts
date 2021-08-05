import { Recipe } from "./recipe.model";

export class RecipeService {
    recipes : Recipe[]=[
  new Recipe('the recipe name','this is a simple text', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg'),
  new Recipe('another test recipe','this is a simple text', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg')
];

getRecipes(){
    return this.recipes.slice();
}

}
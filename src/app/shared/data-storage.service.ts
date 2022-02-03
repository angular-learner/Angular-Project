import {Injectable, OnInit} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({providedIn: 'root'})
export class DataStorageService implements OnInit {

    constructor(private http: HttpClient, private recipeService : RecipeService ){}
ngOnInit(): void {
    
}

storeRecipes(){
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://ng-course-recipe-book-2fe87-default-rtdb.firebaseio.com/recipes.json', recipes);
}
}
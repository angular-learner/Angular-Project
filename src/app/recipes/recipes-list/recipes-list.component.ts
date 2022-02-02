import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {

recipes : Recipe[];
subscription: Subscription;
  constructor(private recipeService: RecipeService,
    private route: Router,
    private router: ActivatedRoute) { }

  ngOnInit() {
   this.subscription= this.recipeService.recipesChanged.subscribe(
      (recipes:Recipe[]) => {
        this.recipes = recipes;
      }
    )
    this.recipes = this.recipeService.getRecipes();
  }
onNewRecipe(){
this.route.navigate(['new'], {relativeTo: this.router}) 
 }

 ngOnDestroy() {
     this.subscription.unsubscribe();
 }

}

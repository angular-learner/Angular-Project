import { NgModule } from "@angular/core";
import {Router, RouterModule, Routes } from "@angular/router";
import { RecipesDetailComponent } from "./recipes/recipes-detail/recipes-detail.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";

const appRoutes : Routes= [
    {path: '', redirectTo :'recipes', pathMatch: 'full'},
    {path: 'recipes', component:RecipesComponent, 
    children:[
        { path : '', component: RecipeStartComponent} ,
        {path: 'new', component: RecipeEditComponent},
        { path : ':id', component: RecipesDetailComponent},
        {path: ':id/edit', component: RecipeEditComponent},
      ]},
    {path: 'shopping-list', component: ShoppingListComponent,
    children:[
        { path : 'edit', component: ShoppingEditComponent} ,
      ]}
]
@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})

export class AppRoutingModule {

}
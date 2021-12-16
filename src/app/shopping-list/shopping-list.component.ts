import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  // providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit, OnDestroy{
  ingredients: Ingredient[];
  private subscribtion: Subscription;

  constructor(private shoppinglistService : ShoppingListService) { }

  ngOnInit(){
  this.ingredients = this.shoppinglistService.getIngredients();
  this.subscribtion = this.shoppinglistService.ingredientsChanged.subscribe(
    (ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    }
  )
  };

  onEditItem(index : number){
    this.shoppinglistService.startEditing.next(index);

  }
  ngOnDestroy(){
    this.subscribtion.unsubscribe();
  }
}

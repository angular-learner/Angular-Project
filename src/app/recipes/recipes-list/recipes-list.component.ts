import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
@Output() selectedItemFL = new EventEmitter<Recipe>();
recipes : Recipe[]=[
  new Recipe('the recipe name','this is a simple text', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg'),
  new Recipe('another test recipe','this is a simple text', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg')
];
  constructor() { }

  ngOnInit() {
  }
  onItemSelected(item: Recipe){
    this.selectedItemFL.emit(item);
  }

}

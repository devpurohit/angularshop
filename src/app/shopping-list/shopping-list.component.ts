import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  public ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 3),
    new Ingredient('Olives', 4)
  ];

  @ViewChild('shopedit') shp: ShoppingEditComponent;

  addShop() {
    this.ingredients.push(new Ingredient(
      this.shp.nInp.nativeElement.value,
      this.shp.aInp.nativeElement.value
    ));
  }

  constructor() { }

  ngOnInit() {
  }

}

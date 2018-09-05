import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('White Pasta', 'This is a pasta with white sauce', 'https://bit.ly/2PAP1v6'),
    new Recipe('Paneer Toast', 'Chilli Paneer Toast Sandwich is a delicious. ',
  'https://bit.ly/2wCR2iy')
];

  constructor() { }

  ngOnInit() {
  }

}

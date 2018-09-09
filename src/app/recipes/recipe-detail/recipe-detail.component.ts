import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recDetail: Recipe = {name: 'Recipezz', desc: 'A brief Description', imagePath: ''};
  constructor() { }

  ngOnInit() {
  }

}

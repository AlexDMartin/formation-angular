import { Component, OnInit } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  recipe: Recipe;

  ngOnInit(): void {
    this.recipe = new Recipe();
    this.recipe.name = 'Dry Martini';
  }
}

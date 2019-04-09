import { Component, OnInit } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  recipes: Recipe[];
  recipe: Recipe;

  ngOnInit(): void {
    const recipe1 = new Recipe();
    recipe1.name = 'Dry Martini';
    recipe1.description = 'Description du Dry Martini';

    const recipe2 = new Recipe();
    recipe2.name = 'Daiquiri';
    recipe2.description = 'Description du Daiquiri';

    const recipe3 = new Recipe();
    recipe3.name = 'Mojito';
    recipe3.description = 'Description du Mojito';

    this.recipes = [];
    this.recipes.push(recipe1);
    this.recipes.push(recipe2);
    this.recipes.push(recipe3);
  }
}

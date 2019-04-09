import { Component, OnInit } from '@angular/core';
import { Recipe } from './models/recipe.model';
import { RecipeService } from './recipe/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(
      recipes => this.recipes = recipes,
      error => console.error('An error occured whiel calling the recipe service')
    )
  }
}

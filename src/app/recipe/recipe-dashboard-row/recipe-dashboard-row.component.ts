import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from 'src/app/services/recipe/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe-dashboard-row.component.html',
  styleUrls: ['./recipe-dashboard-row.component.scss']
})
export class RecipeDashboardRowComponent {

  @Input()
  recipe: Recipe

  constructor(private recipeService: RecipeService){}

  delete(): void {
    this.recipeService.deleteRecipe(this.recipe.id).subscribe(
      success => console.debug('The recipe has been removed'),
      error => console.error('An error occured while calling the recipe service') 
    );
  }
}

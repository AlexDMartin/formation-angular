import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  recipe: Recipe;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.recipeService.getOneRecipe(id).subscribe(
      recipe => this.recipe = recipe, 
      error => console.error('Recipe couldn\'t be found')
      );
  }

}

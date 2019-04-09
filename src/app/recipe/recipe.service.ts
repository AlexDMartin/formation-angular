import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from '../models/recipe.model';

const RECIPES: Recipe[] = [
  {
    name: 'Martini Dry',
    description: 'Desciption du Martini Dry',
    picture: '',
    instructions: [],
    ingredients: []
  },
  {
    name: 'Daiquiri',
    description: 'Desciption du Daiquiri',
    picture: '',
    instructions: [],
    ingredients: []
  },
  {
    name: 'Mojito',
    description: 'Desciption du Mojito',
    picture: '',
    instructions: [],
    ingredients: []
  }
];

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  getRecipes(): Observable<Recipe[]> {
    return of(RECIPES);
  }
}

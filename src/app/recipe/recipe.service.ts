import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from '../models/recipe.model';
import { HttpClient } from '@angular/common/http';

// const RECIPES: Recipe[] = [
//   {
//     name: 'Martini Dry',
//     description: 'Desciption du Martini Dry',
//     picture: '',
//     instructions: [],
//     ingredients: []
//   },
//   {
//     name: 'Daiquiri',
//     description: 'Desciption du Daiquiri',
//     picture: '',
//     instructions: [],
//     ingredients: []
//   },
//   {
//     name: 'Mojito',
//     description: 'Desciption du Mojito',
//     picture: '',
//     instructions: [],
//     ingredients: []
//   }
// ];

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  URL_GET_RECIPES = 'http://10.0.1.212:8080/api/v1/recipes';

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.URL_GET_RECIPES);
  }

  getOneRecipe(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(this.URL_GET_RECIPES + '/' + id)
  }
}

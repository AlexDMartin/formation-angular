import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from './models/recipe.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  URL_GET_RECIPES = 'http://10.0.1.212:8080/api/v1/recipes';

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.URL_GET_RECIPES);
  }

  getOneRecipe(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(this.URL_GET_RECIPES + '/' + id)
  }
}

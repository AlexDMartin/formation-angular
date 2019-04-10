import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from '../../recipe/models/recipe.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  static delete(id: string) {
    throw new Error("Method not implemented.");
  }

  URL_GET_RECIPES = 'http://10.0.1.212:8080/api/v1/recipes';
  URL_POST_RECIPES = 'http://10.0.1.212:8080/api/v1/recipes';
  URL_DELETE_RECIPES = 'http://10.0.1.212:8080/api/v1/recipes';

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.URL_GET_RECIPES);
  }

  getOneRecipe(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(this.URL_GET_RECIPES + '/' + id)
  }

  createRecipe(params: any) : Observable<any> {
    return this.http.post(this.URL_POST_RECIPES, params)
  }

  updateRecipe(params: any) : Observable<any> {
    return this.http.post(this.URL_POST_RECIPES, params)
  }


  deleteRecipe(id: number): Observable<Recipe> {
    return this.http.delete<Recipe>(this.URL_DELETE_RECIPES + '/' + id)
  }
}

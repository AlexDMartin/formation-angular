import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from 'src/app/recipe/models/ingredient.model';
import { Recipe } from 'src/app/recipe/models/recipe.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  URL_GET_INGREDIENTS = 'http://10.0.1.212:8080/api/v1/ingredients';
  URL_POST_INGREDIENTS = 'http://10.0.1.212:8080/api/v1/ingredients';
  URL_DELETE_INGREDIENTS = 'http://10.0.1.212:8080/api/v1/ingredients';

  constructor(private http: HttpClient) {}

  getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.URL_GET_INGREDIENTS);
  }

  getOneIngredient(id: string): Observable<Ingredient> {
    return this.http.get<Ingredient>(this.URL_GET_INGREDIENTS + '/' + id)
  }

  createIngredient(params: any) : Observable<any> {
    return this.http.post(this.URL_POST_INGREDIENTS, params)
  }

  updateIngredient(params: any) : Observable<any> {
    return this.http.post(this.URL_POST_INGREDIENTS, params)
  }

  deleteIngredient(id: number): Observable<Ingredient> {
    return this.http.delete<Ingredient>(this.URL_DELETE_INGREDIENTS + '/' + id)
  }
}

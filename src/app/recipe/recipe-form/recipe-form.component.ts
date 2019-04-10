import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe/recipe.service';
import { Ingredient } from '../models/ingredient.model';
import { IngredientService } from 'src/app/services/recipe/ingredient.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {

  recipeForm: FormGroup;
  ingredients: Ingredient[];

  constructor(private recipeService: RecipeService, private ingredientService: IngredientService, private fb: FormBuilder) {}

  ngOnInit() {

    // Populating ingredient list
    this.ingredientService.getIngredients().subscribe(
      ingredients => this.ingredients = ingredients,
      error => console.error('An error occured while calling the ingredient service')
    )

    // Populating form
     this.recipeForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      picture: [''],
      ingredients: this.fb.array([]),
      instructions: this.fb.array([])
    });
  }

  onSubmit() : void {
    console.debug(this.recipeForm.value);

    this.recipeService.createRecipe(this.recipeForm.value).subscribe(
      success => console.debug("Successfuly posted"),
      error => console.error('An error occured while calling the recipe service')
    )
  }

  addIngredient() {
    console.debug('Adding ingredient');
  }

  removeIngredient() {
    console.debug('Remove ingredient')
  }

  addInstruction() {
    console.debug('Adding instruction');
  }

  removeInstruction() {
    console.debug('Remove instruction')
  }

}

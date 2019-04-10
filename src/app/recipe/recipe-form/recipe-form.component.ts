import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe/recipe.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {

  recipeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl(''),
    picture: new FormControl('')
  });

  constructor(private recipeService: RecipeService, private fb: FormBuilder) {}

  onSubmit() : void {
    console.debug(this.recipeForm.value);

    this.recipeService.createRecipe(this.recipeForm.value).subscribe(
      success => console.debug("Successfuly posted"),
      error => console.error('An error occured while calling the recipe service')
    )
  }

  ngOnInit() {
/*     this.recipeForm = this.fb.group({
      name: ['', Validators.required],
      ingredients: this.fb.array([])
    });

    (this.recipeForm.get('ingredients') as FormArray).controls.forEach(element => {
      
    }); */
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent {

  recipeForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    picture: new FormControl('')
  });

  onSubmit() : void {
    console.debug(this.recipeForm.value);

    
  }

}

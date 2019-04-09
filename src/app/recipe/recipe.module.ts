import { NgModule } from "@angular/core";
import { RecipeComponent } from './recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        RecipeComponent,
        RecipesComponent,
        RecipeDetailsComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        RecipeComponent,
        RecipesComponent,
        RecipeDetailsComponent
    ]  
})
export class RecipeModule {}
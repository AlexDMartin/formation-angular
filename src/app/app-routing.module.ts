import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { RecipesComponent } from './recipe/recipes/recipes.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';

const routes: Routes = [
  {
      path: 'recipes',
      component: RecipesComponent,
      pathMatch: 'full'
  },
  {
    path: 'recipes/:id',
    component: RecipeDetailsComponent,
    pathMatch: 'full'
  },
  {
      path: '**',
      redirectTo: 'recipes',
      pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

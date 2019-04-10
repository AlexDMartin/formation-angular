import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { RecipeDashboardComponent } from './recipe/recipe-dashboard/recipe-dashboard.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { RecipeFormComponent } from './recipe/recipe-form/recipe-form.component';

const routes: Routes = [
  {
      path: 'recipes',
      component: RecipeDashboardComponent,
      pathMatch: 'full'
  },
  {
    path: 'recipe/:id',
    component: RecipeDetailsComponent
  },
  {
    path: 'recipes/add',
    component: RecipeFormComponent
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

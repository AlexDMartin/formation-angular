import { NgModule } from "@angular/core";
import { RecipeDashboardRowComponent } from './recipe-dashboard-row/recipe-dashboard-row.component';
import { RecipeDashboardComponent } from './recipe-dashboard/recipe-dashboard.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { NavigationModule } from '../navigation/navigation.module';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
    declarations: [
        RecipeDashboardRowComponent,
        RecipeDashboardComponent,
        RecipeDetailsComponent,
        RecipeFormComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        NavigationModule,
        ReactiveFormsModule
    ],
    exports: [
        RecipeDashboardRowComponent,
        RecipeDashboardComponent,
        RecipeDetailsComponent
    ]
})
export class RecipeModule {}

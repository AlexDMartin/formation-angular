import { NgModule } from "@angular/core";
import { RecipeDashboardRowComponent } from './recipe-dashboard-row/recipe-dashboard-row.component';
import { RecipeDashboardComponent } from './recipe-dashboard/recipe-dashboard.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        RecipeDashboardRowComponent,
        RecipeDashboardComponent,
        RecipeDetailsComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        RecipeDashboardRowComponent,
        RecipeDashboardComponent,
        RecipeDetailsComponent
    ]
})
export class RecipeModule {}

import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe-dashboard-row.component.html',
  styleUrls: ['./recipe-dashboard-row.component.scss']
})
export class RecipeDashboardRowComponent {

  @Input()
  recipe: Recipe

  isExpanded = false;

  toggleInfo(): void {
    this.isExpanded = !this.isExpanded;
  }

}

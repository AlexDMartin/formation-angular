import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoBackComponent } from './go-back/go-back.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [GoBackComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    GoBackComponent
  ]
})
export class NavigationModule { }

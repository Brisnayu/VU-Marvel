import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoBackDirective } from './directives/goBack/go-back.directive';

@NgModule({
  declarations: [
    GoBackDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

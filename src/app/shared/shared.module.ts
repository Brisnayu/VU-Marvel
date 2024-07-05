import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoBackDirective } from './directives/goBack/go-back.directive';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';


@NgModule({
  declarations: [
    GoBackDirective,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

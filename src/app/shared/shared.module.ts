import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoBackDirective } from './directives/goBack/go-back.directive';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { CardStyleDirective } from './directives/cardStyle/card-style.directive';
import { CustomCardComponent } from './components/custom-card/custom-card.component';
import { LoadingComponent } from './components/loading/loading.component';
import { CapitalizePipe } from './pipes/capitalize/capitalize.pipe';


@NgModule({
  declarations: [
    GoBackDirective,
    CardStyleDirective,
    CustomButtonComponent,
    CustomCardComponent,
    LoadingComponent,
    CapitalizePipe
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    GoBackDirective,
    CardStyleDirective,
    CustomButtonComponent,
    CustomCardComponent,
    LoadingComponent,
    CapitalizePipe
  ]
})
export class SharedModule { }

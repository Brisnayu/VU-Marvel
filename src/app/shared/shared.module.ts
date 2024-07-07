import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoBackDirective } from './directives/goBack/go-back.directive';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { CardStyleDirective } from './directives/cardStyle/card-style.directive';
import { LoadingComponent } from './components/loading/loading.component';
import { CapitalizePipe } from './pipes/capitalize/capitalize.pipe';
import { PrincipalCardComponent } from './components/principal-card/principal-card.component';


@NgModule({
  declarations: [
    GoBackDirective,
    CardStyleDirective,
    CustomButtonComponent,
    LoadingComponent,
    CapitalizePipe,
    PrincipalCardComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    GoBackDirective,
    CardStyleDirective,
    CustomButtonComponent,
    LoadingComponent,
    CapitalizePipe,
    PrincipalCardComponent
  ]
})
export class SharedModule { }

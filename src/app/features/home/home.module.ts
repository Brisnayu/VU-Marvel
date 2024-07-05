import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './component/home.component';
import { CardStyleDirective } from '../../shared/directives/cardStyle/card-style.directive';
import { CustomButtonComponent } from '../../shared/components/custom-button/custom-button.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    CardStyleDirective,
    CustomButtonComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComicsRoutingModule } from './comics-routing.module';
import { ComicsComponent } from './component/comics/comics.component';
import { DetailsComicsComponent } from './component/details-comics/details-comics.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ComicsComponent,
    DetailsComicsComponent
  ],
  imports: [
    CommonModule,
    ComicsRoutingModule,
    SharedModule
  ]
})
export class ComicsModule { }

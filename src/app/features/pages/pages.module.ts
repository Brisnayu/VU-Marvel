import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SeriesComponent } from './components/series/series.component';
import { ComicsComponent } from './components/comics/comics.component';
import { ComicsDetailsComponent } from './components/comics-details/comics-details.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    SeriesComponent,
    ComicsComponent,
    ComicsDetailsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }

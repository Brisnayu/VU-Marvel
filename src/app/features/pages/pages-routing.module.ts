import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesComponent } from './components/series/series.component';
import { ComicsComponent } from './components/comics/comics.component';
import { ComicsDetailsComponent } from './components/comics-details/comics-details.component';

const routes: Routes = [
  {
    path: '', component: SeriesComponent
  },
  {
    path: ':id/comics', children: [
      {
        path: '',
        component: ComicsComponent
      },
      {
        path: ':comicId',
        component: ComicsDetailsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

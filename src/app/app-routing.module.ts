import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(mod => mod.HomeModule) },
  { path: 'series', loadChildren: () => import('./features/series/series.module').then(mod => mod.SeriesModule) },
  { path: 'series/:id', loadChildren:() => import('./features/comics/comics.module').then(mod => mod.ComicsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(mod => mod.HomeModule) },
  { path: 'series', loadChildren: () => import('./features/pages/series.module').then(mod => mod.SeriesModule) },
  { path: '**', loadChildren: () => import('./features/not-found/not-found.module').then(mod => mod.NotFoundModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

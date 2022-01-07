import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmptyComponent } from './pages/empty/empty.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'produtos',
    component: HomeComponent
  },
  {
    path: '**',
    component: EmptyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

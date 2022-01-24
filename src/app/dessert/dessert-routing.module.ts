import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DessertPage } from './dessert.page';

const routes: Routes = [
  {
    path: ':id',
    component: DessertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DessertPageRoutingModule {}

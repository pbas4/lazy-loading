import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { Comp1Component } from './comp-1/comp-1.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: Comp1Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule {}

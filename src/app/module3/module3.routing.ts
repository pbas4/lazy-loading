import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { Comp3Component } from './comp-3/comp-3.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: Comp3Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module3RoutingModule {}

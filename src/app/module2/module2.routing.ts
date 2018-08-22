import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { Comp2Component } from './comp-2/comp-2.component';
import { Comp21Component } from './comp-2-1/comp-2-1.component';

const routes: Routes = [
  { path: '', component: Comp2Component, children: [
      { path: ':id', component: Comp21Component }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module2RoutingModule {}

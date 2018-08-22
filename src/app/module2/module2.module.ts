import { NgModule } from '@angular/core';

import { Comp2Component } from './comp-2/comp-2.component';
import { Comp21Component } from './comp-2-1/comp-2-1.component';

import { Module2RoutingModule } from './module2.routing';

@NgModule({
  declarations: [
    Comp2Component,
    Comp21Component
  ],
  imports: [
    Module2RoutingModule
  ]
})
export class Module2Module { }

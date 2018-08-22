import { NgModule } from '@angular/core';

import { Comp1Component } from './comp-1/comp-1.component';

import { Module1RoutingModule } from './module1.routing';

@NgModule({
  declarations: [
    Comp1Component
  ],
  imports: [
    Module1RoutingModule
  ]
})
export class Module1Module { }

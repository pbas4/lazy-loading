import { NgModule } from '@angular/core';

import { Comp3Component } from './comp-3/comp-3.component';

import { Module3RoutingModule } from './module3.routing';

@NgModule({
  declarations: [
    Comp3Component
  ],
  imports: [
    Module3RoutingModule
  ]
})
export class Module3Module { }

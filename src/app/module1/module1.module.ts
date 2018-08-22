import { NgModule } from '@angular/core';

import { Comp1Component } from './comp-1/comp-1.component';

import { Module1RoutingModule } from './module1.routing';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';

import { Comp1Services } from './comp-1.services';

@NgModule({
  declarations: [
    Comp1Component
  ],
  imports: [
    Module1RoutingModule,
    HttpClientModule
  ],
  providers: [Comp1Services]
})
export class Module1Module { }

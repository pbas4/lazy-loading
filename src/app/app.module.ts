import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing';
import { SubjectComponent } from './subject/subject.component';
import { SubjectEmitterComponent } from './subject-emitter/subject-emitter.component';

import { AppServices } from './app.services';

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    SubjectEmitterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AppServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

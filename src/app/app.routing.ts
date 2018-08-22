import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';
import { NgModule } from '@angular/core';

import { SubjectEmitterComponent } from './subject-emitter/subject-emitter.component';

const routes: Routes = [
  { path: '', redirectTo: 'comp-1', pathMatch: 'full' },
  { path: 'comp-1', loadChildren: './module1/module1.module#Module1Module' },
  { path: 'comp-2', loadChildren: './module2/module2.module#Module2Module' },
  { path: 'comp-3', loadChildren: './module3/module3.module#Module3Module' },
  { path: 'subject-emitter', component: SubjectEmitterComponent },
  { path: '**', redirectTo: 'comp-1' }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {}

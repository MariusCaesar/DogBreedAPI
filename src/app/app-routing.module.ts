import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogListComponent } from './dog-list/dog-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/dogbreeds', pathMatch: 'full' },
  { path: 'dogbreeds', component: DogListComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

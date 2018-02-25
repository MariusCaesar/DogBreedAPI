import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogListComponent } from './dog-list/dog-list.component';
import { DogListItemComponent } from './dog-list-item/dog-list-item.component';

const routes: Routes = [
  { path: '', redirectTo: '/dogbreeds', pathMatch: 'full' },
  { path: 'details/:name', component: DogListItemComponent},
  { path: 'dogbreeds', component: DogListComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

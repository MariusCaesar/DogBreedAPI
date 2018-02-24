import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { DogListComponent } from './dog-list/dog-list.component';

import { DogService } from './dog.service';
import { DogListItemComponent } from './dog-list-item/dog-list-item.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DogListComponent,
    DogListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DogService],
  bootstrap: [AppComponent]
})
export class AppModule { }

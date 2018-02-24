import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { DogListComponent } from './dog-list/dog-list.component';

import { DogService } from './dog.service';

@NgModule({
  declarations: [
    AppComponent,
    DogListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DogService],
  bootstrap: [AppComponent]
})
export class AppModule { }

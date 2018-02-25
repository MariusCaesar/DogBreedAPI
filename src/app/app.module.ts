import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DogListComponent } from './dog-list/dog-list.component';

import { RouterModule } from '@angular/router';

import { DogService } from './dog.service';
import { DogListItemComponent } from './dog-list-item/dog-list-item.component';
import { AppRoutingModule } from './/app-routing.module';
import { SearchPipePipe } from './search-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DogListComponent,
    DogListItemComponent,
    SearchPipePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [DogService],
  bootstrap: [AppComponent]
})
export class AppModule { }

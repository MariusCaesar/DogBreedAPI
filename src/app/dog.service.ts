import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DogService {
  private dogBreedsUrl = 'https://dog.ceo/api/breeds/list/all';
  private httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient
  ) { }

  getDogBreeds() {
   return this.http.get(this.dogBreedsUrl);
}

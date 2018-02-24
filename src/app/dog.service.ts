import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DogService {
  private dogBreedsUrl = 'https://dog.ceo/api/breeds/list';

  constructor(
    private http: HttpClient
  ) { }

  getDogBreeds() {
   return this.http.get<DogAPIResponse>(this.dogBreedsUrl);
  }
}

interface DogAPIResponse {
  success: string;
  message: Array<string>;
}

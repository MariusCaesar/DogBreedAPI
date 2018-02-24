import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class DogService {
  private dogBreedsUrl = 'https://dog.ceo/api/breeds/list';
  private dogBreedImageUrl = 'https://dog.ceo/api/breed/hound/images';

  constructor(
    private http: HttpClient
  ) { }

  getDogBreeds() {
   return this.http.get<DogAPIResponse>(this.dogBreedsUrl);
  }

  getDogBreedImages() {
    return this.http.get<DogAPIResponse>(this.dogBreedImageUrl)
               .subscribe(data => {
                 console.log(data.message);
               })
  }
}

interface DogAPIResponse {
  success: string;
  message: Array<string>;
}

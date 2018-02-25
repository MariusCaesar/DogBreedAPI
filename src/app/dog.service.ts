import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DogService {
  private dogBreedsUrl = 'https://dog.ceo/api/breeds/list';
  private dogBreedImageUrl: string;

  constructor(
    private http: HttpClient
  ) { }

  getDogBreeds() {
   return this.http.get<DogAPIResponse>(this.dogBreedsUrl);
  }

  private getDogBreedImages(dogbreed) {
    return this.http.get<DogAPIResponse>(this.dogBreedImageUrl);
  }

  setDogBreedUrl(breed: string) {
    this.dogBreedImageUrl = `https://dog.ceo/api/breed/${breed}/images/random`;
    return this.getDogBreedImages(this.dogBreedImageUrl);
  }
}

interface DogAPIResponse {
  success: string;
  message: Array<string>;
}

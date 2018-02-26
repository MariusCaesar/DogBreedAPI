import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';


@Injectable()
export class DogService {
  private dogBreedsUrl: string = 'https://dog.ceo/api/breeds/list';
  private dogBreedImageUrl: string;

  constructor(
    private http: HttpClient
  ) { }

  getDogBreeds(): Observable<any>{
    // get our dog breeds from remote api
   return this.http.get<DogAPIResponse>(this.dogBreedsUrl)
              .pipe(
                // catch if any errors
                catchError(this.handleError('DogBreeds', []))
              );

  }

   getDogBreedImages(breed: string): Observable<any> {
     // set dogbreed imgUrl to retrive
    this.dogBreedImageUrl = `https://dog.ceo/api/breed/${breed}/images/random`;
     // get dogbreed img
    return this.http.get<DogAPIResponse>(this.dogBreedImageUrl)
               .pipe(
                 // catch if any errors
                 catchError(this.handleError('DogBreedImages', []))
               );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      //log error to the console
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }


}

interface DogAPIResponse {
  success: string;
  message: Array<string>;
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';


@Injectable()
export class DogService {
  private dogBreedsUrl: string = 'https://dog.ceo/api/breeds/list';
  private dogBreedImageUrl: string;

  constructor(
    private http: HttpClient
  ) { }

  getDogBreeds(): Observable<any>{
   return this.http.get<DogAPIResponse>(this.dogBreedsUrl)
              .pipe(
                catchError(this.handleError('DogBreeds', []))
              );

  }

   getDogBreedImages(breed: string): Observable<any> {
    this.dogBreedImageUrl = `https://dog.ceo/api/breed/${breed}/images/random`;
    return this.http.get<DogAPIResponse>(this.dogBreedImageUrl)
               .pipe(
                 catchError(this.handleError('DogBreedImages', []))
               );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      //log error to the console
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T)
    }
  }

  searchDogs(term: string): Observable<any>{
    if (!term.trim()) {
        return of([]);
    }

    return this.http.get<DogAPIResponse>(this.dogBreedsUrl)
               .pipe(
                 catchError(this.handleError('SearchTerm'))
               )
  }

}

interface DogAPIResponse {
  success: string;
  message: Array<string>;
}

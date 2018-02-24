import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {

  public dogBreeds: string[] = [];
  public selectedBreed;

  constructor(
    private dogService: DogService
  ) { }

  ngOnInit() {
    this.getDogBreeds();
    this.dogService.getDogBreedImages()
  }

  getDogBreeds() {
    this.dogService.getDogBreeds()
        .subscribe(dogs => {
          this.dogBreeds = dogs.message;
        }, (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
              console.log("Client-side error occured!");
          } else {
            console.log("Server-side error occured!");
          }
      })
  }

  onSelect(breed): void {
    this.selectedBreed = breed;
  }




}

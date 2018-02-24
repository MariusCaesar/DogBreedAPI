import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';


@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {

  public dogBreeds: string[] = [];
  selectedBreed;

  constructor(
    private dogService: DogService
  ) { }

  ngOnInit() {
    this.getDogBreeds();
  }

  getDogBreeds() {
    this.dogService.getDogBreeds()
        .subscribe(dogs => {
          this.dogBreeds = dogs['message'];
        }, (Error) => {
          console.log(Error);
      })
  }

  onSelect(dog): void {
    this.selectedBreed = dog;
  }




}

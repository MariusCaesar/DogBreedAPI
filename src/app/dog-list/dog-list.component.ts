import { Component, OnInit, OnDestroy } from '@angular/core';
import { DogService } from '../dog.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {

  public dogBreeds: string[] = [];

  constructor(
    private dogService: DogService
  ) { }

  ngOnInit() {
    this.getDogBreeds();
  }

  getDogBreeds() {
    // utilise service to get dog breed list
    this.dogService.getDogBreeds()
        .subscribe(dogs => {
          // assign result to comp member
          // to iterate over in template
          this.dogBreeds = dogs.message;
    })
  }



}

import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import 'rxjs/add/operator/map';
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

  getDogBreeds(){
    this.dogService.getDogBreeds()
        .subscribe(dogs => {
          console.log(Object.keys(dogs.message))
          this.dogBreeds = Object.keys(dogs.message);
        })
  }



}

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dog-list-item',
  templateUrl: './dog-list-item.component.html',
  styleUrls: ['./dog-list-item.component.css']
})
export class DogListItemComponent implements OnInit {
  @Input() breed;
  @Input() breedPhoto;

  constructor(
    private route: ActivatedRoute,
    private dogService: DogService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getDogBreed();
  }

  getDogBreed(): void {
    let dogBreed = this.route.snapshot.paramMap.get('name');
    this.breed = dogBreed;
    this.dogService.setDogBreedUrl(this.breed)
        .subscribe(data => this.breedPhoto = data.message);
  }

  goBack(): void {
    this.location.back();
  }



}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dog-list-item',
  templateUrl: './dog-list-item.component.html',
  styleUrls: ['./dog-list-item.component.css']
})
export class DogListItemComponent implements OnInit {
  @Input() breed;

  constructor() { }

  ngOnInit() {
  }

}

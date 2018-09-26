import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
 @Input() isFavourite = false;
 @Output() change = new EventEmitter();

  constructor() { }
  ngOnInit() {
  }
  onClick(){
  this.isFavourite = !this.isFavourite;
  this.change.emit({newValue : this.isFavourite});
}
}

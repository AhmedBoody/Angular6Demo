import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input() isLiked = false;
  @Input() likeCounter = 0;
 
   constructor() { }
   ngOnInit() {
   }
   onClick(){
   this.isLiked = !this.isLiked;
   this.likeCounter +=  this.isLiked ? 1 : -1;
 }
}

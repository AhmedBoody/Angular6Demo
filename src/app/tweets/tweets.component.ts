import { Component, OnInit } from '@angular/core';
import{TweetsService} from '../tweets.service'
import {tweet} from '../tweet'
@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  list :tweet[];
  constructor(private tweetService:TweetsService) {
    this.list = tweetService.getTweets();
   }
  ngOnInit() {
  }
  onClick(obj){
    obj.isLiked = !obj.isLiked;
    obj.likeCounter +=  obj.isLiked ? 1 : -1;
  }
}

import { Injectable } from '@angular/core';
import {tweet} from '../app/tweet';
@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  constructor() { }
  getTweets():tweet[] {
    return[{
      name : 'Ahmed Mohamed',
      ImageUrl :'https://pbs.twimg.com/profile_images/1029024304170770438/XKy-tGeb_bigger.jpg',
      desc:'test test test',
      likeCounter:100,
      isLiked:true,
      Salary:5000,
      Rate:4.565,
      birthDate:new Date()
    }
    ,{
      name : 'Mohamed Farouk',
      ImageUrl :'https://pbs.twimg.com/profile_images/1029024304170770438/XKy-tGeb_bigger.jpg',
      desc:'test test test test test test',
      likeCounter:50,
      isLiked:false,
      Salary:5000,
      Rate:14.6565,
      birthDate:new Date()
    }];
  }
}


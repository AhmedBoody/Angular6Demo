import { Component, ElementRef } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  Courses = [];
  post = {
    title :"Title",
    isFavourite:true,
    isLiked:true,
    likeCounter:100,
    voteCount:10,
    myVote : 0,
    Desc: `We may need to describe the type of variables that we do not know when we are writing an application. These values may come from dynamic content, e.g. from the user or a 3rd party library. In these cases, we want to opt-out of type-checking and let the values pass through compile-time checks. To do so, we label these with the any type
    The any type is a powerful way to work with existing JavaScript, allowing you to gradually opt-in and 
    opt-out of type-checking during compilation. You might expect Object to play a similar role, 
    as it does in other languages. But variables of type Object only allow you to assign any value to them -
     you can’t call arbitrary methods on them, even ones that actually exist`
  };
  viewMode = 'as';
  isActive = true;
  title = 'Angualr App';
  imageURL = 'https://pbs.twimg.com/profile_images/1029024304170770438/XKy-tGeb_bigger.jpg';
  onClick($event){
    event.stopPropagation();
   console.log("A7a",$event);
  }
  onDivClick(){
    console.log('handeled by div');
  }
  onFavouriteChange($event){
    console.log($event);
  }
  change(viewmode)
  {
    this.viewMode = viewmode;
  
  }
}

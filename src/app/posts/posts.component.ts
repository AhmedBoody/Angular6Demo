import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  posts:any[];
  constructor(private http:Http) {
    http.get(this.url)
    .subscribe(response=>{
      this.posts = response.json();
    });
   }

   createPost(input:HTMLInputElement)
   {
     let post:any = {
        title : input.value
     };
     this.http.post(this.url,JSON.stringify(post))
     .subscribe(response=> {
       post.id = response.json().id;
       this.posts.splice(0,0,post);
     });
   }
}

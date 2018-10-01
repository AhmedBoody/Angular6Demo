import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { AppError } from '../AppError';
import { NotFoundError } from '../NotFoundError';
import { BadRequestError } from '../BadRequestError';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:any[];
  constructor(private postService:PostService) {
   
   }

  ngOnInit() {
this.postService.getPosts()
    .subscribe(response=>{
      this.posts = response.json();
    },(error : Response) =>{
        if(error instanceof  BadRequestError)
        {
          alert(error.originalError());
        }
        else{
          alert("un expected Errors");
        }
      console.log(error);
    });
  }

  addPost(input :HTMLInputElement)
  {
    let post:any ={title : input.value};
    this.postService.addPost(post).subscribe(response =>{
      post['id'] = post.id;
      this.posts.splice(0,0,post);
    },(error : Response) =>{
      if(error instanceof BadRequestError)
      {
        alert("there is bad request");
      }
      else{
        alert("un expected Errors");
      }
    })
  }
  updatePost(post){
   this.postService.updatePost(post)
   .subscribe(response => {
     console.log(response.json());
   },error =>{
    alert("un expected Errors");
    console.log(error);
  });
  }

  deletePost(post){
    this.postService.deletePost(3544)
    .subscribe(response => {
      debugger;
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    },(error : AppError) =>{
      if(error instanceof NotFoundError)
      {
        alert("this post has been already");
      }
      else{
        alert("un expected Errors");
      }
    console.log(error);
  });
}
}

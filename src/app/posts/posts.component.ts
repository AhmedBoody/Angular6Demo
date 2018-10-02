import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { AppError } from '../AppError';
import { NotFoundError } from '../NotFoundError';
import { BadRequestError } from '../BadRequestError';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import{Observable} from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/combineLatest';
import { combineLatest } from 'rxjs-compat/operator/combineLatest';
import { timer } from 'rxjs/observable/timer';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:any[];
  constructor(private postService:PostService,private route:ActivatedRoute) {
   
   }

   ngOnInit( ) {
  
    //  let idRoute =  this.route.paramMap;
    //  let pageRoute =  this.route.queryParamMap;
    //  let pageSizeRoute = this.route.queryParamMap;
    
    //  const x = forkJoin(idRoute,pageRoute,pageSizeRoute).pipe(
    //    map(([first,second,third]) =>
    //    { 
    //      return { first, second ,third};
    //     }
    //    )
    //  ).subscribe(sub =>{
    //   debugger;
    //     let id= sub[0].get('id');
    //     let page= sub[1].get('page');
    //     let PageSize= sub[2].get('PageSize');
    //   console.log("id : " + id + "page : "+ page+ "pageSize :" + PageSize);
    //  });

    this.route.queryParams.subscribe(params => {
      let  page = params.page;
      let pageSize = params.pageSize;
      console.log(page); 
      console.log(pageSize);
      // popular
    });

    this.route.params.subscribe(params => {
      let  id = params.id;
      console.log(id); 
      // popular
    });

    this.postService.getAll()
    .subscribe(
      posts=> this.posts = posts
   ,(error : Response) =>{
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
    this.posts.splice(0,0,post);

    input.value = '';

    this.postService.add(post).subscribe(newPost =>{
      post['id'] = newPost.id;
    },(error : Response) =>{
       this.posts.splice(0,1);
    
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
   this.postService.update(post)
   .subscribe(updatedPost => {
     console.log(updatedPost);
   },error =>{
    alert("un expected Errors");
    console.log(error);
  });
  }

  deletePost(post){
    let index = this.posts.indexOf(post);
    this.posts.splice(index,1);

    this.postService.deletet(post.id)
    .subscribe( () => {

    },(error : AppError) =>{
      this.posts.splice(index,1,post);

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

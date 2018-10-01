import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { catchError } from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import { AppError } from '../AppError';
import { NotFoundError } from '../NotFoundError';
import { BadRequestError } from '../BadRequestError';
import  'rxjs/add/observable/throw';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http:Http) {

   }
   getPosts(){
     return this.http.get(this.url).pipe(
      catchError((error:Response)=>
      {
        if(error.status === 400)
        throw Observable.throwError(new BadRequestError(error.json())); 
        throw Observable.throwError(new AppError(error.json())); 
      })
     );;
   }
   addPost(post){
    return this.http.post(this.url,JSON.stringify(post)).pipe(
      catchError((error:Response)=>
      {
        if(error.status === 400)
          return Observable.throwError(new BadRequestError(error.json())); 
        return Observable.throwError(new AppError(error.json())); 
      })
     );
  }
  updatePost(post){
    return this.http.patch(this.url+ '/'+post.id,{isRead:true});
  }
  deletePost(postId){
   return this.http.delete(this.url+'/'+postId).pipe(
    catchError((error:Response)=>
    {
      if(error.status === 404)
         throw(new NotFoundError(error.json())); 
         throw(new AppError(error.json())); 
    })
   );

 }
}

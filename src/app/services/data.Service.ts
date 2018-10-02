import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { catchError, map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import { AppError } from '../AppError';
import { NotFoundError } from '../NotFoundError';
import { BadRequestError } from '../BadRequestError';
import  'rxjs/add/Observable/throw';
import  'rxjs/Operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private url:string,private http:Http) {

   }
   getAll(){
     return this.http.get(this.url).pipe(map(res => res.json()),
      catchError((error:Response)=>
      {
        if(error.status === 400)
        throw (new BadRequestError(error.json())); 
        throw (new AppError(error.json())); 
      })
     );;
   }
   add(resource){
    return this.http.post(this.url,JSON.stringify(resource)).pipe(
        map(res => res.json()),
      catchError((error:Response)=>
      {
        if(error.status === 400)
           throw(new BadRequestError(error.json())); 
         throw(new AppError(error.json())); 
      })
     );
  }
  update(resource){
    return this.http.patch(this.url+ '/'+resource.id,{isRead:true});
  }
  deletet(resourceId){
   return this.http.delete(this.url+'/'+resourceId).pipe(
    map(res => res.json()),
    catchError((error:Response)=>
    {
      if(error.status === 404)
         throw(new NotFoundError(error.json())); 
          throw(new AppError(error.json())); 
    })
   );
 }
}

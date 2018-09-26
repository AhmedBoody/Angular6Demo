import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import{Http} from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class CourseService {
data : Observable<Array<string>>;
    constructor(public http:Http) { }
    getCourses(){
      this.data = new Observable(observer => {

        setTimeout(()=>{
          observer.next(['Test','Test','Test']);
        },1000);

      });
      return this.data;
    }
    getPersons(){
        return this.data = this.http.get('https://jsonplaceholder.typicode.com/users').pipe(map(res => res.json()));
    };

    addPerson(user){
      return  this.http.post('https://jsonplaceholder.typicode.com/users',user).pipe(map(res => res.json()));
  };
  deletePerson(id){
    return  this.http.delete('https://jsonplaceholder.typicode.com/users/'+id).pipe(map(res => res.json()));
};

editPerson(user,id){
  return  this.http.put('https://jsonplaceholder.typicode.com/users/'+ id ,user).pipe(map(res => res.json()));
};
  }
  
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import {AutoGrowDirective} from '../auto-grow.directive'
import { ActivatedRoute } from '@angular/router';
import{Observable} from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/combineLatest';
import { combineLatest } from 'rxjs-compat/operator/combineLatest';
import { timer } from 'rxjs/observable/timer';
import {forkJoin } from 'rxjs';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  providers:[AutoGrowDirective],
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
title:string = 'the title of course';
persons :any[]=[];
  constructor(private courseService :CourseService,private route:ActivatedRoute) {  

  }
  ngOnInit( ) {
    // let idRoute =  this.route.paramMap;
    // let pageRoute =  this.route.queryParamMap;
    // let pageSizeRoute = this.route.queryParamMap;
    
    // const x = forkJoin(idRoute,pageRoute,pageSizeRoute).pipe(
    //   map(([first,second,third]) =>
    //   { 
    //     return { first, second ,third};
    //    }
    //   )
    // ).subscribe(sub =>{
    //    let id= sub[0].get('id');
    //    let page= sub[0].get('page');
    //    let PageSize= sub[0].get('PageSize');
    //   this.courseService.getPersons().subscribe(data =>{
    //     this.persons= data;
    //   });
    // });
    this.courseService.getPersons().subscribe(data =>{
      this.persons= data;
    });
  }

  addPerson(){
    this.persons.push(
      {
        id:121,
        name :"Ahmed pUSH"
       }
    );
  }
  onRemove(person)
  {
    let index = this.persons.indexOf(person);
    this.persons.splice(index,1);
  }
}

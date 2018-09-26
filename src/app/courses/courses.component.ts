import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import {AutoGrowDirective} from '../auto-grow.directive'
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  providers:[AutoGrowDirective],
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
title:string = 'the title of course';
persons :any[]=[];
  constructor(private courseService :CourseService) {  
    courseService.getPersons().subscribe(data =>{
      this.persons= data;
    });
  }
  ngOnInit( ) {
   
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

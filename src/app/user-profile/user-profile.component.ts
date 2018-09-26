import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import{CourseService} from '../course.service'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
name:any;
persons :Person[]=[];
person:Person;
  constructor(private courseService :CourseService,private route: ActivatedRoute) {
    courseService.getPersons().subscribe(data =>{
      this.persons= data;
      this.route.params.subscribe(params => {
        this.persons.forEach((p) => {
          if (p.id == params.id) {
            this.person = p;
            console.log("Object");
            console.log(this.person );
          }
        });
      });
    });
   }

  ngOnInit() {
   
  }

}


export class Person {
  id:null;
  name :string;
  username:string;
  email:string;
}

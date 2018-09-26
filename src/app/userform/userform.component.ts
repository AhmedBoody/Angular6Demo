import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  isEditMode : boolean = false;
  persons :any[]=[];
  constructor(private courseService :CourseService) {  
    courseService.getPersons().subscribe(data =>{
      this.persons= data;
    });
  }
  user = {
          id:0,
          name :"",
          username:"",
          Email:""
         };
  ngOnInit() {
  }

  onSubmit(form){
    if(this.isEditMode)
    {
      this.courseService.editPerson(this.user,this.user.id).subscribe(data =>{
      for(let i = 0;i< this.persons.length;i++)
      {
        if(this.persons[i].id == this.user.id){

          this.persons.splice(i,1);
        }
      }
      this.persons.push(data);
    });

    }
    else{
      this.courseService.addPerson(this.user).subscribe(data =>{
        this.persons.unshift(data);
        this.user = {
          id:this.persons.length+1,
          name :"",
          username:"",
          Email:""
         };
      
      });
    }
    form.reset();
  }

 
  deleteItem(id){
    this.courseService.deletePerson(id).subscribe(data =>{
        for(let i = 0;i< this.persons.length;i++)
      {
        if(this.persons[i].id == id){

          this.persons.splice(i,1);
        }

      }
    });
  }
  
  editItem(user){
    this.isEditMode = true;
    this.user = user;
  }

}

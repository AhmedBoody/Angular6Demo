import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent{
/* form = new FormGroup({
  topics:  new FormArray([]),
  name : new FormControl(),
  contact: new FormGroup(
    {
      email:new FormControl(),
      phone : new FormControl()
    }
  ),
}); */
form;
constructor(fb:FormBuilder){
  this.form =
fb.group({
  name : ['',Validators.required],
  contact:fb.group({
    email : [],
    phone : []
  }),
  topics : fb.array([])
})
}
get topics(){
 return this.form.get('topics') as FormArray
}
addTopic(topic:HTMLInputElement){
 this.topics.push(new FormControl(topic.value));
  topic.value = '';
}
removeTopic(topic:FormControl){
  debugger;
  let index = this.topics.controls.indexOf(topic);
  this.topics.removeAt(index);
}
}

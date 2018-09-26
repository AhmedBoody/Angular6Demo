import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  isExpanded = false;
  @Input() title : string;
  @Input() content : string ;
  constructor() { }
  ngOnInit() {
  }
  Toggle(){
   this.isExpanded = !this.isExpanded;
  }
}

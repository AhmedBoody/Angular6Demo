import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { format } from 'url';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
@Input('format') format;
  @HostListener('blur') onblur(){
    let value:string = this.el.nativeElement.value;
   if(this.format == 'lowercase')
    this.el.nativeElement.value = value.toLowerCase();
  else
  this.el.nativeElement.value = value.toUpperCase();

  }
  constructor(private el :ElementRef) { }
}

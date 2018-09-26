import{Directive,ElementRef,Renderer,HostListener} from '@angular/core';
@Directive({
    selector :'[appAutoGrow]'
})
export class AutoGrowDirective{
    constructor(private el:ElementRef,private ren : Renderer){

    }

    @HostListener('focus') onfocus() {
        this.ren.setElementStyle(this.el.nativeElement,'width','200');
      }
    
      @HostListener('blur') onblur() {
        this.ren.setElementStyle(this.el.nativeElement,'width','120');
      }
}
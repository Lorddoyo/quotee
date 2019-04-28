import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.backgroundColor='green'
  }

  @HostListener('click') onClicks() {
    this.highLight('red');
  }


  private highLight(action:string){
    this.elem.nativeElement.style.backgroundColor=action;
   }
  }

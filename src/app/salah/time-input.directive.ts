import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTimeInput]'
})
export class TimeInputDirective {
  //24 hours format 
  //<hour> 
  //<h> range is 0-2
  //<hh> if h is 2 then range is 0-3

  //<minutes>
  //<mm> range is 0-59

  constructor(private el: ElementRef) { }

  @HostListener('focusout') onFocusOut() {
    let text: string = this.el.nativeElement.value;
    let units: string[];
    let hourLeft: number;
    let hourRight: number;

    if (text.length === 5 && text.indexOf('_') === -1) {
      units = text.split(':');
      hourLeft = +(units[0][0]);
      hourRight = +(units[0][1]);
      if (hourLeft === 2 && hourRight > 3) {
        this.el.nativeElement.style.backgroundColor = 'red';
      } else {
        this.el.nativeElement.style.backgroundColor = 'white';
      }
    }
  }
}

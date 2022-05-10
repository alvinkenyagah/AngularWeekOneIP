import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHello]'
})
export class HelloDirective {

  constructor(private elem:ElementRef) {elem.nativeElement.style.backgroundColor = "green" }

}

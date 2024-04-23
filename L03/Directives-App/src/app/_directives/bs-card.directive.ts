import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[bsCard]',
})
export class BsCardDirective {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    this.elementRef.nativeElement.style.padding = '10px';
  }
}

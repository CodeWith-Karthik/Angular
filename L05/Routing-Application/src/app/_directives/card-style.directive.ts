import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCardStyle]',
})
export class CardStyleDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      'honeydew'
    );

    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');

    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'border',
      '1px solid black'
    );
  }
}

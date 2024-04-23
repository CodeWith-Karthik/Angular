import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[adCard]',
})
export class AdCardDirective {
  @Input() defaultColor: string = 'red';
  @Input() adColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.backgroundColor = this.defaultColor;

    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'red'
    );

    this.renderer.setStyle(this.elementRef.nativeElement, 'padding', '10px');

    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
  }

  @HostListener('mouseenter') mouseHover() {
    this.backgroundColor = this.adColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('click') mouseClick() {
    this.backgroundColor = 'green';
  }
}

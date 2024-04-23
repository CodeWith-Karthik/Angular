import { Component, Input } from '@angular/core';
import { IProduct } from '../_models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input('product-ip') product: IProduct;

  constructor() {
    console.log('1.Constructor Called');
  }

  ngOnChanges() {
    console.log('2.ngOnChanges Called');
  }

  ngOnInit() {
    console.log('3.ngOnInit Called');
  }

  ngDoCheck() {
    console.log('4.ngDoCheck Called');
  }

  ngAfterContentInit() {
    console.log('5.ngAfterContentInit only once for load ng-content');
  }

  ngAfterContentChecked() {
    console.log('6.ngAfterContentChecked Called');
  }

  ngAfterViewInit() {
    console.log('7.ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('8.ngAfterViewChecked Called');
  }

  ngOnDestroy() {
    console.log('9.ngOnDestroy Called');
  }
}

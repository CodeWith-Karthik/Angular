import { Component, Input } from '@angular/core';
import { IProduct } from '../_models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input('product-ip') product: IProduct;
}

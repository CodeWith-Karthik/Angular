import { Component, Input } from '@angular/core';
import { IProduct } from '../../_models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input('product-ip') product: IProduct;
}

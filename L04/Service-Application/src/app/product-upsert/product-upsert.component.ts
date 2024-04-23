import { Component } from '@angular/core';
import { IProduct } from '../_models/product.model';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-product-upsert',
  templateUrl: './product-upsert.component.html',
  styleUrl: './product-upsert.component.css',
  // providers: [ProductService],
})
export class ProductUpsertComponent {
  product: IProduct = { name: '', price: '', imageUrl: '' };

  constructor(private productService: ProductService) {}

  onSubmit() {
    console.log(this.product);

    this.productService.addProduct(this.product);

    this.product = { name: '', price: '', imageUrl: '' };
  }

  onShow() {
    this.productService.isDisplayComponent.next(true);
  }

  onHide() {
    this.productService.isDisplayComponent.next(false);
  }
}

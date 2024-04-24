import { Component } from '@angular/core';
import { IProduct } from '../../_models/product.model';
import { ProductService } from '../../_services/product.service';

@Component({
  selector: 'app-product-upsert',
  templateUrl: './product-upsert.component.html',
  styleUrl: './product-upsert.component.css',
})
export class ProductUpsertComponent {
  product: IProduct = {
    id: '',
    name: '',
    brand: '',
    price: '',
    imageUrl: '',
    manufacturedYear: '',
  };

  constructor(private productService: ProductService) {}

  onSubmit() {
    console.log(this.product);

    this.productService.addProduct(this.product);

    this.product = {
      id: '',
      name: '',
      brand: '',
      price: '',
      imageUrl: '',
      manufacturedYear: '',
    };
  }
}

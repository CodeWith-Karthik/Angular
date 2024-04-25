import { Component } from '@angular/core';
import { IProduct } from '../_models/product.model';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: IProduct[] = [];
  visibility: boolean = true;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((responseData) => {
      this.products = responseData;
    });
  }
}

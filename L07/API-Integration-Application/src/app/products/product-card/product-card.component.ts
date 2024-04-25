import { Component, Input } from '@angular/core';
import { IProduct } from '../../_models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input('product-ip') product: IProduct;

  constructor(private router: Router) {}

  onDetailsPage() {
    this.router.navigate(['product', this.product.id]);
  }
}

import { Component } from '@angular/core';
import { IProduct } from './_models/product.model';
import { ProductService } from './_services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // providers: [ProductService],
})
export class AppComponent {
  products: IProduct[] = [];
  visibility: boolean = true;
  productSub: Subscription;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.productSub = this.productService.isDisplayComponent.subscribe(
      (data: boolean) => {
        this.visibility = data;
      }
    );
  }

  ngOnDestroy() {
    this.productSub.unsubscribe();
  }
}

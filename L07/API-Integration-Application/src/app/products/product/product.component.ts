import { Component, Input } from '@angular/core';
import { IProduct } from '../../_models/product.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../../_services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  product: IProduct;
  id: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });

    if (this.id) {
      this.product = this.productService.getProductById(this.id);
      console.log(this.product);
    }
  }

  onEdit() {
    this.router.navigate(['product-upsert', this.id]);
  }

  onBack() {
    this.router.navigate(['/']);
  }

  onRefresh() {
    this.router.navigate(['product', this.id], { relativeTo: this.route });
  }
}

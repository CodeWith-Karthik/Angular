import { Component } from '@angular/core';
import { IProduct } from '../../_models/product.model';
import { ProductService } from '../../_services/product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product-upsert',
  templateUrl: './product-upsert.component.html',
  styleUrl: './product-upsert.component.css',
})
export class ProductUpsertComponent {
  id: string = '';
  isEditMode: boolean = false;
  product: IProduct = {
    id: '',
    name: '',
    brand: '',
    price: '',
    imageUrl: '',
    manufacturedYear: '',
  };

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    //console.log(this.route.snapshot.params);
    // console.log(this.route.snapshot.queryParams);
    // console.log(this.route.snapshot.fragment);

    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });

    // this.route.queryParams.subscribe((x) => {
    //   console.log(x);
    // });

    // this.route.fragment.subscribe((x) => {
    //   console.log(x);
    // });

    if (this.id) {
      this.product = this.productService.getProductById(this.id);
      this.isEditMode = true;
    }
  }

  onSubmit() {
    if (!this.isEditMode) {
      this.product.id = Math.random().toString();
      this.productService.addProduct(this.product);
      this.product = {
        id: '',
        name: '',
        brand: '',
        price: '',
        imageUrl: '',
        manufacturedYear: '',
      };
      this.router.navigateByUrl('/');
    } else {
      this.productService.updateProduct(this.product);
      this.router.navigateByUrl(`/product/${this.product.id}`);
    }
  }

  onBack() {
    if (this.isEditMode) {
      this.router.navigateByUrl(`/product/${this.product.id}`);
    } else {
      this.router.navigateByUrl('/');
    }
  }
}

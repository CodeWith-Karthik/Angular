import { Component } from '@angular/core';
import { IProduct } from '../../_models/product.model';
import { ProductService } from '../../_services/product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  form: FormGroup;

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

    this.initForm();

    if (this.id) {
      this.product = this.productService.getProductById(this.id);
      this.isEditMode = true;
      this.popluateForm();
    }
  }

  initForm() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      brand: new FormControl(null),
      price: new FormControl(null),
      imageUrl: new FormControl(null),
      manufacturedYear: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
      ]),
    });
  }

  popluateForm() {
    this.form.patchValue({
      name: this.product.name,
      brand: this.product.brand,
      price: this.product.price,
      imageUrl: this.product.imageUrl,
      manufacturedYear: this.product.manufacturedYear,
    });
  }

  onSubmit() {
    this.product.name = this.form.value.name;
    this.product.brand = this.form.value.brand;
    this.product.price = this.form.value.price;
    this.product.imageUrl = this.form.value.imageUrl;
    this.product.manufacturedYear = this.form.value.manufacturedYear;

    if (!this.isEditMode) {
      this.product.id = Math.random().toString();
      this.productService.addProduct(this.product);

      this.router.navigateByUrl('/');
    } else {
      this.product.id = this.id;
      this.productService.updateProduct(this.product);
      this.router.navigateByUrl(`/product/${this.product.id}`);
    }

    this.form.reset();
  }

  onBack() {
    if (this.isEditMode) {
      this.router.navigateByUrl(`/product/${this.product.id}`);
    } else {
      this.router.navigateByUrl('/');
    }
  }
}

// onSubmit() {
//   if (!this.isEditMode) {
//     this.product.id = Math.random().toString();
//     this.productService.addProduct(this.product);
//     this.product = {
//       id: '',
//       name: '',
//       brand: '',
//       price: '',
//       imageUrl: '',
//       manufacturedYear: '',
//     };
//     this.router.navigateByUrl('/');
//   } else {
//     this.productService.updateProduct(this.product);
//     this.router.navigateByUrl(`/product/${this.product.id}`);
//   }
// }

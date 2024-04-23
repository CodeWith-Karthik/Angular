import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { IProduct } from '../_models/product.model';

@Component({
  selector: 'app-product-upsert',
  templateUrl: './product-upsert.component.html',
  styleUrl: './product-upsert.component.css',
})
export class ProductUpsertComponent {
  product: IProduct = { name: '', price: '', imageUrl: '' };

  @Output() addProduct = new EventEmitter<IProduct>();

  onSubmit() {
    console.log(this.product);

    this.addProduct.emit(this.product);

    this.product = { name: '', price: '', imageUrl: '' };
  }
}

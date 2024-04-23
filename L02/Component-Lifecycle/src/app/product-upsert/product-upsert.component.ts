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

  @ViewChild('priceVC', { static: true }) price: ElementRef;

  onSubmit(productName: HTMLInputElement) {
    console.log(this.product);

    //Local Reference way 1
    console.log(productName);
    console.log('Local Reference 1 ' + productName.value);
    this.product.name = productName.value;

    //Local Reference way 2
    console.log(this.price.nativeElement);
    console.log('Local Refernce 2 ' + this.price.nativeElement.value);

    this.product.price = this.price.nativeElement.value;

    this.addProduct.emit(this.product);

    this.product = { name: '', price: '', imageUrl: '' };
  }
}

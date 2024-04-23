import { EventEmitter, Injectable } from '@angular/core';
import { IProduct } from '../_models/product.model';
import { LoggerService } from './logger.service';
import { Subject } from 'rxjs';

@Injectable()
export class ProductService {
  productList: IProduct[] = [
    {
      name: 'IPhone 15 Pro Max',
      price: '1450',
      imageUrl:
        'https://images.pexels.com/photos/18525574/pexels-photo-18525574/free-photo-of-unboxing-iphone-15-pro-max-box-in-natural-titanium-color-mention-zana_qaradaghy-on-instagram-while-use-this-photo-follow-on-instagram-zana_qaradaghy.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  isDisplayComponent = new Subject<boolean>();

  constructor(private logger: LoggerService) {}

  getProducts(): IProduct[] {
    this.logger.logInformation('Products List Fetched');
    return this.productList;
  }

  addProduct(product: IProduct): void {
    this.productList.push(product);
    this.logger.logInformation('Product Added');
  }
}

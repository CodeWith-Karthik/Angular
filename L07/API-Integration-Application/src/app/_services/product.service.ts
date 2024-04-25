import { EventEmitter, Injectable } from '@angular/core';
import { IProduct } from '../_models/product.model';
import { LoggerService } from './logger.service';
import { map, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://angular-1ec0f-default-rtdb.firebaseio.com';

@Injectable()
export class ProductService {
  productsList: IProduct[] = [];

  constructor(private http: HttpClient, private logger: LoggerService) {}

  getProducts() {
    this.logger.logInformation('Products List Fetched');

    return this.http.get(BASE_URL + '/product.json').pipe(
      map((responseData) => {
        const products = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            const product = { ...responseData[key], id: key };
            products.push(product);
          }
        }
        return products;
      })
    );
  }

  addProduct(product: IProduct) {
    const customProduct = {
      name: product.name,
      brand: product.brand,
      price: product.price,
      imageUrl: product.imageUrl,
      manufacturedYear: product.manufacturedYear,
    };

    return this.http.post(BASE_URL + '/product.json', customProduct);
  }

  getProductById(id: string) {
    return this.http.get(BASE_URL + `/product/${id}.json`).pipe(
      map((responseData) => {
        return { ...responseData, id };
      })
    );
  }

  updateProduct(product: IProduct) {
    const customProduct = {
      name: product.name,
      brand: product.brand,
      price: product.price,
      imageUrl: product.imageUrl,
      manufacturedYear: product.manufacturedYear,
    };

    return this.http.put(
      BASE_URL + `/product/${product.id}.json`,
      customProduct
    );
  }

  deleteProduct(id: string) {
    return this.http.delete(BASE_URL + `/product/${id}.json`);
  }
}

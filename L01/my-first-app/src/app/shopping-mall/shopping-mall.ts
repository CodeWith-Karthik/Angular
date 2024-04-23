import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  //Element
  selector: 'app-shopping-mall',
  //Attribute
  //selector: '[app-shopping-mall]',
  //Css Class
  //selector: '.app-shopping-mall',
  templateUrl: './shopping-mall.html',
  //template: `<app-shop></app-shop>`,
  styleUrl: './shopping-mall.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class ShoppingMall {
  shoppingMallName: string = 'Shopping Mall';
  isButtonActive: boolean = true;
  createNewShop: string = 'No Shop is added yet';
  shopName: string = '';
  isShopCreated: boolean = false;
  shops: string[] = ['shop one', 'shop two', 'shop two'];

  constructor() {
    setTimeout(() => {
      this.isButtonActive = false;
    }, 2000);
  }

  onCreateShop(): void {
    this.createNewShop = 'New Shop is Added ' + this.shopName;
    this.isShopCreated = true;
    this.shops.push(this.shopName);
  }

  onUpdateShopName(event: Event) {
    console.log((<HTMLInputElement>event.target).value);
    this.shopName = (<HTMLInputElement>event.target).value;
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ShoppingMall } from './shopping-mall/shopping-mall';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  declarations: [AppComponent, ShoppingMall, ShopComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

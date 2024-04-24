import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductUpsertComponent } from './products/product-upsert/product-upsert.component';
import { ProductComponent } from './products/product/product.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './_services/product.service';
import { ProductsComponent } from './products/products.component';
import { ProductCardComponent } from './products/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductUpsertComponent,
    ProductComponent,
    ProductsComponent,
    ProductCardComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}

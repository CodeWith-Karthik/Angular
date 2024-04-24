import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductUpsertComponent } from './products/product-upsert/product-upsert.component';
import { ProductComponent } from './products/product/product.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './_services/product.service';
import { ProductsComponent } from './products/products.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'product-upsert',
    component: ProductUpsertComponent,
  },
  {
    path: 'product-upsert/:id',
    component: ProductUpsertComponent,
  },
  {
    path: 'product/:id',
    component: ProductComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductUpsertComponent,
    ProductComponent,
    ProductsComponent,
    ProductCardComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}

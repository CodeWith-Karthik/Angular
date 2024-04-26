import { NgModule } from '@angular/core';
import { ProductUpsertComponent } from './product-upsert/product-upsert.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CardStyleDirective } from '../_directives/card-style.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProductService } from '../_services/product.service';

@NgModule({
  declarations: [
    ProductUpsertComponent,
    ProductComponent,
    ProductsComponent,
    ProductCardComponent,
    CardStyleDirective,
  ],
  imports: [ReactiveFormsModule, SharedModule],
  providers: [ProductService],
  exports: [ProductsComponent],
})
export class ProductModule {}

import { RouterModule, Routes } from '@angular/router';
import { ProductUpsertComponent } from './product-upsert/product-upsert.component';
import { ProductComponent } from './product/product.component';
import { authGuard } from '../_guards/auth.guard';
import { NgModule } from '@angular/core';

const productRoutes: Routes = [
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
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}

import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductUpsertComponent } from './products/product-upsert/product-upsert.component';
import { ProductComponent } from './products/product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { authGuard } from './_guards/auth.guard';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'user-auth',
    component: UserAuthComponent,
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
    canActivate: [authGuard],
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

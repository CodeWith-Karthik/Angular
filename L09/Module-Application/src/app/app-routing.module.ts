import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { UserAuthComponent } from './user/user-auth/user-auth.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ProductRoutingModule } from './products/product-routing.module';

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
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes), ProductRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}

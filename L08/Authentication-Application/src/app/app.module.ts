import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductUpsertComponent } from './products/product-upsert/product-upsert.component';
import { ProductComponent } from './products/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './_services/product.service';
import { ProductsComponent } from './products/products.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroComponent } from './hero/hero.component';
import { CardStyleDirective } from './_directives/card-style.directive';
import { UserAuthComponent } from './user-auth/user-auth.component';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { authInterceptor } from './_interceptor/auth.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { errorInterceptor } from './_interceptor/error.interceptor';
import { SpinnerComponent } from './spinner/spinner.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductUpsertComponent,
    ProductComponent,
    ProductsComponent,
    ProductCardComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponent,
    HeroComponent,
    CardStyleDirective,
    UserAuthComponent,
    SpinnerComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot({
      closeButton: true,
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [
    ProductService,
    provideHttpClient(withInterceptors([authInterceptor, errorInterceptor])),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

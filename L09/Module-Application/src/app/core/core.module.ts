import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeroComponent } from './hero/hero.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductModule } from '../products/product.module';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    NotFoundComponent,
    HeroComponent,
    MainComponent,
    FooterComponent,
  ],
  imports: [RouterModule, ProductModule, SharedModule],
  exports: [MainComponent],
})
export class CoreModule {}

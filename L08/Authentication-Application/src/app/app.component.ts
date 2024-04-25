import { Component } from '@angular/core';
import { IProduct } from './_models/product.model';
import { ProductService } from './_services/product.service';
import { Subscription } from 'rxjs';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private authService: AuthService) {
    this.authService.autoLogin();
  }
}

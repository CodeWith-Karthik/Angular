import { Component } from '@angular/core';
import { IProduct } from './_models/product.model';
import { ProductService } from './_services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}

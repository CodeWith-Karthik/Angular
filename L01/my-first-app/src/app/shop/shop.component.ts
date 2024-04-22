import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent {
  id: number = Math.floor(Math.random() * (10 - 1 + 1) + 1);
  status: string = 'Opened';

  constructor() {
    this.status = Math.random() > 0.5 ? 'Opened' : 'Closed';
  }

  getColor(): string {
    return this.status === 'Opened' ? 'yellow' : 'black';
  }
}

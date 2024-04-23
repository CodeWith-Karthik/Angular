import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isSuperCars: boolean = true;

  superCars: string[] = [
    'GTR r35',
    'GTR r34',
    'Mustang',
    'Supra',
    'Porcshe gtr3 rs',
  ];

  cars: string[] = ['Alto', 'Verna', 'BMW M5', 'AUDI RS6', 'Swift'];

  condition: number = 30;

  onToggle(): void {
    this.isSuperCars = !this.isSuperCars;
  }
}

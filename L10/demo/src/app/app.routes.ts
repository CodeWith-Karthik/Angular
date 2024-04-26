import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BikeComponent } from './bike/bike.component';
import { CarComponent } from './car/car.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'bike',
    component: BikeComponent,
  },
  {
    path: 'car',
    component: CarComponent,
  },
];

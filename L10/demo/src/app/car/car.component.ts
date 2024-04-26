import { Component } from '@angular/core';
import { VehicleService } from '../_services/vehicle.service';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css',
})
export class CarComponent {
  cars: string[] = [];
  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {
    this.cars = this.vehicleService.getCarBrands();
  }
}

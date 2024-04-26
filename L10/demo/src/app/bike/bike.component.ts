import { Component } from '@angular/core';
import { VehicleService } from '../_services/vehicle.service';
import { CarComponent } from '../car/car.component';

@Component({
  selector: 'app-bike',
  standalone: true,
  imports: [CarComponent],
  templateUrl: './bike.component.html',
  styleUrl: './bike.component.css',
})
export class BikeComponent {
  bikes: string[] = [];
  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {
    this.bikes = this.vehicleService.getBikeBrands();
  }
}

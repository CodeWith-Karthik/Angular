export class VehicleService {
  bikes: string[] = ['KTM', 'TVS', 'HERO', 'YAMAHA'];
  cars: string[] = ['AUDI', 'BMW', 'BENZ', 'PAGANI'];

  getBikeBrands(): string[] {
    return this.bikes;
  }

  getCarBrands(): string[] {
    return this.cars;
  }
}

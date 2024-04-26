import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { VehicleService } from './_services/vehicle.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), VehicleService],
};

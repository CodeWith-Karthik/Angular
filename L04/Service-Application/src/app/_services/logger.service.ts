import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  logInformation(message: string) {
    console.warn('Custom Logger ' + message);
  }
}

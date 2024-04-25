import { HttpInterceptorFn, HttpParams } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { switchMap, take } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  let token = '';

  return authService.currentUser$.pipe(
    take(1),
    switchMap((user) => {
      if (user) {
        token = user.idToken;
        const authReq = req.clone({
          params: new HttpParams().set('auth', token),
        });
        return next(authReq);
      } else {
        return next(req);
      }
    })
  );
};

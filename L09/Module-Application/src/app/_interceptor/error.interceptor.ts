import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastr = inject(ToastrService);
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error) {
        switch (error.status) {
          case 400:
            toastr.error('Invalid Credentials', error.status.toString());
            break;
          case 401:
            toastr.error('Unauthorised', error.status.toString());
            break;
          case 404:
            router.navigateByUrl('/not-found');
            break;

          default:
            toastr.error('Something unexpected went worng');
            break;
        }
      }

      throw error;
    })
  );
};

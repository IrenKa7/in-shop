import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class InterceptorService {


  constructor(
  ) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const code = localStorage.getItem('code');
    req = req.clone({
      setHeaders: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json',
        'Authorization': `Bearer ${code}`,
      },
    });

    return next.handle(req).pipe(err => {
      console.log(err);
      // if (err.status === 401) {
      //   // this.authService.logOut();
      //   console.log('401');
      // }
      // if (err.status === 502 || err.status === 500 || err.status === 503 || err.status === 0) {
      //   this.errorsService.errorCode.next(err.status);
      // }
      // const error = err.error.message || err.statusText;
      return err;
    });
  }
}

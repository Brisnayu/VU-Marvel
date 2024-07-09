import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authHash = localStorage.getItem('hash');
    const public_key = localStorage.getItem('public_key')

    if (authHash && public_key) {
      const authReq = request.clone({
        params: request.params
          .set('ts', 1)
          .set('apikey', public_key)
          .set('hash', authHash)
      });

      return next.handle(authReq);
    }

    return next.handle(request);

  }
}
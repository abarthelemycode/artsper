import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../_services';
import { environment } from "../../environments/environment";

@Injectable({ providedIn: 'root' })
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const apiUrl = environment.apiUrl;

        let token = this.authenticationService.getToken();
        let header = {}
        if (token) {
          header = {
            "Content-Type": "application/json",
            "x-token" : `${token}`
          }
        }
        request = request.clone({
            url: apiUrl + request.url,
            setHeaders: header
        });


        return next.handle(request);
    }
}

import { Injectable, ViewChild } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HeaderComponent } from '../../layout/components/header/header.component';
import { AuthenticationService } from '../services';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService:AuthenticationService) { }

    // @ViewChild(HeaderComponent) private header: HeaderComponent;
    // this.header.onLoggedout();
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload(true);
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}
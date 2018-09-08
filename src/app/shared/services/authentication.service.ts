import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AppSettings } from '../../appSettings/app.settings';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    constructor(private http: HttpClient , private router:Router) { }

    login(username: string, password: string) {
        
        let url = AppSettings.BASE_URL + AppSettings.LOGIN;
        return this.http.post<any>(url, { username, password })
            .pipe(map(user => {
                
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out      
        console.log('logged out');
        localStorage.removeItem('currentUser');
    }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  private logged: BehaviorSubject<boolean>;

    constructor(private http: HttpClient) {
      let initLogged = (this.getToken())? true : false
      this.logged = new BehaviorSubject<boolean>(initLogged)
    }

    public getToken() {
      return localStorage.getItem('currentToken');
    }

    isLogged (){
      return this.logged.asObservable()
    }

    login(params: Object) {
      return this.http.post<any>(`/auth/login`, params)
          .pipe(map(res => {
              // login successful if there's a jwt token in the response
              if (res.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentToken', res.token);
                this.logged.next(true)
              }
              return res
          }));
    }

    logout() {
      localStorage.removeItem('currentToken');
      this.logged.next(false)
    }



}

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from './auth/login/models/login-model';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { Configuration } from '../configuration';
import { PasswordModel } from './auth/login/models/password-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = true;// Must be false

  constructor(private http: HttpClient) { }

  login() {
    this.isAuthenticated = true;
  }

  logout() {
    this.isAuthenticated = false;
  }

  isAuthenticatedOk(): boolean {
    return this.isAuthenticated;
  }

  loginByEmail(login: LoginModel): Observable<LoginModel> {
    return this.http.post<LoginModel>(`${Configuration.UrlApi}/auth/login`, login, {
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    }).pipe(tap(c => console.log(c)), catchError(this.handleError));
  }

  loginByPassWord(pwd: PasswordModel): Observable<any> {
    return this.http.post<LoginModel>(`${Configuration.UrlApi}/auth/password`, pwd, {
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    }).pipe(tap(c => console.log(c)), catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    errorMessage = `Server returned message / code : ${err.message} / ${err.status}, error message is : ${err.message}`;
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}

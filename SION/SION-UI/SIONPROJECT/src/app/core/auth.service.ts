import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel, LoginModel as Role } from './auth/login/models/login-model';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { Configuration } from '../configuration';
import { PasswordModel } from './auth/login/models/password-model';
import { SionRole } from './models/role';
import { UserRole } from './models/userRole';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;// Must be false

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
    return this.http.post<Role>(`${Configuration.UrlApi}/auth/password`, pwd, {
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    }).pipe(tap(c => console.log(c)), catchError(this.handleError));
  }

  AddUserRole(role:UserRole): Observable<any> {
    return this.http.post<UserRole>(`${Configuration.UrlApi}/auth/addUserRole`, role, {
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    }).pipe(tap(c => console.log(c)), catchError(this.handleError));
  }


  userRoles(): Observable<any> {
      return this.http.get<any>(`${Configuration.UrlApi}/auth/userRoles`).pipe(
        tap(c => console.log(c)),
        catchError(this.handleError));
    }

  ajoutRole(role:SionRole): Observable<any> {
    return this.http.post<Role>(`${Configuration.UrlApi}/auth/addRole`, role, {
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

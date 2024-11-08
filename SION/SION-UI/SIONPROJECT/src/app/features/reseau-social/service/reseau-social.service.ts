import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReseauSocialModel } from '../models/reseau-social-model';
import { Configuration } from '../../../configuration';
import { Observable, catchError, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReseauSocialService {

  constructor(private http: HttpClient) { }

  getReseauxSociaux(): Observable<ReseauSocialModel[]> {
    return this.http.get<ReseauSocialModel[]>(`${Configuration.UrlApi}/reseauxSocial`).pipe(
      tap(c => console.log(c)),
      catchError(this.handleError));
  }

  creer(reseauSocial: ReseauSocialModel): Observable<ReseauSocialModel> {
    return this.http.post<ReseauSocialModel>(`${Configuration.UrlApi}/reseauxSocial/creer`, reseauSocial, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).pipe(
      tap(c => console.log(c)),
      catchError(this.handleError));
  }

  getReseauSocialById(id: number) {
    let route = `${Configuration.UrlApi}/ReseauxSocial/${id}`;
    return this.http.get<ReseauSocialModel>(route).pipe(
      tap(c => console.log(c)),
      catchError(this.handleError));
  }

  delete(id: string): Observable<ReseauSocialModel[]> {
    let route = `${Configuration.UrlApi}/ReseauxSocial/delete/${id}`;
    return this.http.delete<ReseauSocialModel[]>(route).pipe(
      tap(c => console.log(c)),
      catchError(this.handleError));
  }

  //maj = mise à jours
  maj(i: any): Observable<any> {
    let cons = `${Configuration.UrlApi}/ReseauxSocial/modifie`;
    return this.http.put<any>(cons, i, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).pipe(
      tap(c => console.log(c)),
      catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    console.log(err);
    console.log('===> ' + err.type);

    errorMessage = `Server returned message / code : ${err.message} / ${err.status}, error message is : ${err.message}`;

    console.error(errorMessage);

    return throwError(() => errorMessage);
  }
}

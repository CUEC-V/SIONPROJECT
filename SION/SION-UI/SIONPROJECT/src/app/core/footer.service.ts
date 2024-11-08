import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Configuration } from '../configuration';
import { Accueil } from '../accueil/models/accueil';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor(private http: HttpClient) { }

  getAccueil(): Observable<Accueil[]> {
    return this.http.get<Accueil[]>(`${Configuration.UrlApi}/accueil`).pipe(
      tap(c => console.log(c)),
      catchError(this.handleError));
  }


  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
      errorMessage = `Server returned message / code : ${err.message} / ${err.status}, error message is : ${err.message}`;

    console.error(errorMessage);

    return throwError(() => errorMessage);
  }
}

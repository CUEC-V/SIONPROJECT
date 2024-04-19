import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuration } from '../../configuration';
import { AccueilModel } from '../models/accueil-model';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Accueil } from '../models/accueil';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AccueilService {

  constructor(private http: HttpClient) {
    let url = Configuration;
  }

  getAccueil(): Observable<Accueil[]> {
    return this.http.get<Accueil[]>(`${Configuration.UrlApi}/accueil`).pipe(
      tap(c => console.log(c)),
      catchError(this.handleError));
  }

  creer(accueil: AccueilModel): Observable<AccueilModel> {
    return this.http.post<AccueilModel>(`${Configuration.UrlApi}/accueil/creer`, accueil, {
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
    console.log('===> '+err.type);
  
      errorMessage = `Server returned message / code : ${err.message} / ${err.status}, error message is : ${err.message}`;
  

    console.error(errorMessage);

    return throwError(() => errorMessage);
  }
}

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactModel } from '../models/contacter-model';
import { Configuration } from '../../../configuration';
import { catchError, Observable, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getMessages(): Observable<ContactModel[]> {
    return this.http.get<ContactModel[]>(`${Configuration.UrlApi}/contact`).pipe(
      tap(c => console.log(c)),
      catchError(this.handleError));
  }


  envoyer(contact: ContactModel): Observable<ContactModel> {
    console.log(JSON.stringify(contact))
   // return of(contact);
    return this.http.post<ContactModel>(`${Configuration.UrlApi}/contact/creer`, contact, {
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    }).pipe(tap(c => console.log(c)), catchError(this.handleError));
  }

  getMessageById(id: number) {
    let route = `${Configuration.UrlApi}/contact/${id}`;
    return this.http.get<ContactModel>(route).pipe(
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

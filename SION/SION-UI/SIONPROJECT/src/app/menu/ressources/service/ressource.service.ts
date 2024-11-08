import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { Configuration } from '../../../configuration';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Ressource } from '../models/ressource-model';

@Injectable({
  providedIn: 'root'
})
export class RessourceService {

  constructor(private http: HttpClient) { }

  getRessources(type: string): Observable<Ressource[]> {
    return this.http.get<Ressource[]>(`${Configuration.UrlApi}/ressource?type=${type}`).pipe(
      tap(c => console.log(c)),
      catchError(this.handleError));
  }


  publier(ressource: Ressource): Observable<Ressource> {
    return this.http.post<Ressource>(`${Configuration.UrlApi}/ressource/creer`, ressource, {
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    }).pipe(tap(c => console.log(c)), catchError(this.handleError));
  }

  getRessourceById(id: number) {
    let route = `${Configuration.UrlApi}/ressource/${id}`;
    return this.http.get<Ressource>(route).pipe(
      tap(c => console.log(c)),
      catchError(this.handleError));
  }

  getVideosForChanel(channel: string, maxResults: number): Observable<any> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + Configuration.Youtube_API_KEY + '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }

  valider(ressource: Ressource): Observable<Ressource> {
    let urlModifie = `${Configuration.UrlApi}/ressource/modifie`;
    return this.http.put<Ressource>(urlModifie, ressource, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).pipe(
      tap(c => console.log(c)),
      catchError(this.handleError));
  }

  private toQueryString(query: any): string {
    var parts = [];
    for (var property in query) {
      var value = query[property];
      if (value != null && value != undefined)
        parts.push(encodeURIComponent(property) + '=' + encodeURIComponent(value))
    }

    return parts.join('&');
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';

    errorMessage = `Server returned message / code : ${err.message} / ${err.status}, error message is : ${err.message}`;

    console.error(errorMessage);

    return throwError(() => errorMessage);
  }
}

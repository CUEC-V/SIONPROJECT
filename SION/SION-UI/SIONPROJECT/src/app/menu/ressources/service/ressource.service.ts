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

  getRessources(): Observable<Ressource[]> {
    return this.http.get<Ressource[]>(`${Configuration.UrlApi}/ressource`).pipe(
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

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';

    errorMessage = `Server returned message / code : ${err.message} / ${err.status}, error message is : ${err.message}`;

    console.error(errorMessage);

    return throwError(() => errorMessage);
  }
}

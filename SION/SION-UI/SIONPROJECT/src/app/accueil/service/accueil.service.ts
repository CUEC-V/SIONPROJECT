import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuration } from '../../configuration';
import { AccueilModel } from '../models/accueil-model';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { Accueil } from '../models/accueil';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AccueilService {

  constructor(private http: HttpClient) {}

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

  modifier(id: number, accueilEdit: AccueilModel): Observable<AccueilModel> {
    let urlModifie = `${Configuration.UrlApi}/accueil/modifie`;
    return this.http.put<AccueilModel>(urlModifie, accueilEdit, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).pipe(
      tap(c => console.log(c)),
      catchError(this.handleError));
  }

  getVideoByVideoIdForChanel(channel: string, videoId: string): Observable<any> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + Configuration.Youtube_API_KEY + '&channelId=' + channel + '&order=date&part=snippet &type=video,videoId=' + videoId
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }
  
  getVideoByVideoIdForChanelByRessources(channel: string, videoId: string, ressourceId : string): Observable<any> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + Configuration.Youtube_API_KEY + '&channelId=' + channel + '&order=date&part=snippet &type=video,videoId=' + videoId
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
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

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuration } from '../../../configuration';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PredicationServiceService {

  constructor(private http: HttpClient) { }

  getVideosForChanel(channel: string, maxResults: number): Observable<any> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + Configuration.Youtube_API_KEY + '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }
}

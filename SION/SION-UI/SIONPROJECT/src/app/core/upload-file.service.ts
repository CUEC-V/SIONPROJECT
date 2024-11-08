import { HttpClient, HttpEvent, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Configuration } from "../configuration";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class UploadService {
    constructor(private http: HttpClient) { }

    fupload(file: File, ressourceKey:number): Observable<HttpEvent<any>> {
        const formData: FormData = new FormData();
        formData.append('file', file);
    
        const req = new HttpRequest('POST', `${Configuration.UrlApi}/ressource/fichier?ressourceKey=${ressourceKey}`, formData, {
          responseType: 'json'
        });
    
        return this.http.request(req);
      }
}
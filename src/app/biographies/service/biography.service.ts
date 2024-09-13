import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Environment} from "@angular/cli/lib/config/workspace-schema";
import {environment} from "../../../environments/environment.development";
import {catchError, map, Observable, tap, throwError} from "rxjs";
import {BiographyEntity} from "../model/biography.entity";

@Injectable({
  providedIn: 'root'
})
export class BiographyService {
  apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}


  getBiographies(): Observable<BiographyEntity[]> {
    return this.http.get<{ value: BiographyEntity[] }>(this.apiUrl)
      .pipe(
            map(response => response.value),

            catchError(error => {
            console.error('Error :', error);
            return throwError(() => new Error('Error fetching data'));
      })
    );
  }



}



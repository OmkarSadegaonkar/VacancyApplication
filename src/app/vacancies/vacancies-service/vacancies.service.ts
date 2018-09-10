import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VacanciesService {

   uri = 'http://localhost:4300/api/product';
  constructor(private _http: HttpClient) { }

   getData(): Observable<String> {
    return this._http.get<any>(`${this.uri}`)
      .pipe(
        catchError(e => throwError(e))
      );
  

    }
   getDataByID(id): Observable<any> {
           return this._http.get<String>(`${this.uri}/id/${id}`)
          .pipe(
        catchError(e => throwError(e))
            );

    }
  updateVacancy(id, updatedVacancy) {
    console.log(updatedVacancy);
    return this._http.put<any>(`${this.uri}/${id}`, updatedVacancy)
    .pipe(
        catchError(e => throwError(e))
            );
  }
  deleteVacancy(id) {
    return this._http.delete<any>(`${this.uri}/${id}`)
    .pipe(
        catchError(e => throwError(e))
            );
  }
}

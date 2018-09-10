import { VacanciesService } from '../vacancies-service/vacancies.service';
import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class vacanciesResolver implements Resolve<Observable<any>> {
  constructor(private _vacanciesservice: VacanciesService) {}

  resolve() {
   return this._vacanciesservice.getData().pipe(
   catchError(err => throwError('data not available at this time'))
   );
  }
}
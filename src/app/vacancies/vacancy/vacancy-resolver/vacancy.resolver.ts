import {VacanciesService} from '../../vacancies-service/vacancies.service';
import {Injectable} from '@angular/core';

import {Resolve, ActivatedRouteSnapshot} from '@angular/router';

import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable()
export class vacancyResolver implements Resolve<Observable<any>> {
  constructor(private _vacanciesservice: VacanciesService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this._vacanciesservice.getDataByID(route.params.id).pipe(
      catchError(err => throwError('data not available at this time'))
    );
  }
}
import { Component, OnInit } from '@angular/core';
import {VacanciesService} from '../../vacancies-service/vacancies.service';
import { Route, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  vacancies: Object;

  constructor(private _vacanciesservice: VacanciesService, private _route: ActivatedRoute) { }

 /* getData(id) {
     this._vacanciesservice.getDataByID(id)
  .subscribe(data => {
    this.vacancies = data;
    console.log(this.vacancies);
  })
  };
  */
  deleteVacancy(id) {
    this._vacanciesservice.deleteVacancy(id)
  .subscribe(data => {
      console.log(this.vacancies);
  })
  //  location.reload();
  }
  ngOnInit() {
     console.log('details.........')
      this.vacancies = this._route.snapshot.data.vacancyData[0];
  }

}

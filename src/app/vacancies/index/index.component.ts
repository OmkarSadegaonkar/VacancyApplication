import {Component, OnInit} from '@angular/core';
import {VacanciesService} from '../vacancies-service/vacancies.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  vacancies: Object;

  constructor(private _vacanciesservice: VacanciesService, private _route: ActivatedRoute) {}


  ngOnInit() {
    this.vacancies = this._route.snapshot.data.vacancies;
    console.log(this.vacancies)


  }

}

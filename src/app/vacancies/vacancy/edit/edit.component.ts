import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {VacanciesService} from '../../vacancies-service/vacancies.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  vacancies: Object;
  angForm: FormGroup;
  constructor(private _route: ActivatedRoute,
    private _vacanciesservice: VacanciesService,
    private _fb: FormBuilder) {this.createForm();}

  createForm() {
    this.angForm = this._fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      salary: ['', Validators.required],
      currency: ['', Validators.required]
    });
  }


  updateVacancy() {
    console.log(this.angForm.value);
    this._vacanciesservice.updateVacancy(this._route.snapshot.params.id, this.angForm.value)
      .subscribe(dataa => {
        console.log(dataa),
          error => console.log(error);
      });

  }


  ngOnInit() {
    this.vacancies = this._route.snapshot.data.vacancyEdit[0];
  }


}

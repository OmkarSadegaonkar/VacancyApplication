import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule  } from '@angular/common/http';
import { VacanciesRoutingModule } from './vacancies-routing.module';
import { VacanciesService } from './vacancies-service/vacancies.service';
import { vacanciesResolver } from './vacancies-resolver/vacancies.resolver';



@NgModule({
  imports: [
    CommonModule,
    VacanciesRoutingModule, HttpClientModule
  ],
  declarations: [IndexComponent],
  exports: [],
  providers: [VacanciesService, vacanciesResolver]
})
export class VacanciesModule { }

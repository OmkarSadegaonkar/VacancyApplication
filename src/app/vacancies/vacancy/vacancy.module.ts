import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacancyRoutingModule } from './vacancy-routing.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { vacancyResolver } from './vacancy-resolver/vacancy.resolver';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    VacancyRoutingModule, ReactiveFormsModule
  ],
  declarations: [CreateComponent, EditComponent, DetailsComponent],
  exports: [],
  providers: [vacancyResolver]
})
export class VacancyModule { }

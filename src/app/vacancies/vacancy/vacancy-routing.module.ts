import {CreateComponent} from './create/create.component';
import {DetailsComponent} from './details/details.component';
import {EditComponent} from './edit/edit.component';
import {vacancyResolver} from './vacancy-resolver/vacancy.resolver';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [

  {
    path: 'edit/:id',
    component: EditComponent,
    resolve: {vacancyEdit: vacancyResolver}
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: '',
    component: DetailsComponent,
    resolve: {vacancyData : vacancyResolver }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacancyRoutingModule {}

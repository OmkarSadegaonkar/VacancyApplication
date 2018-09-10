import {IndexComponent} from './index/index.component';
import { vacanciesResolver } from './vacancies-resolver/vacancies.resolver';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [



  {
    path: 'index',
    component: IndexComponent,
    resolve: { vacancies : vacanciesResolver },
    children: [
      {
        path: 'details/:id',
        loadChildren: './vacancy/vacancy.module#VacancyModule'
      },
      {path: 'create', loadChildren: './vacancy/vacancy.module#VacancyModule'}

    ]
  },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacanciesRoutingModule {}

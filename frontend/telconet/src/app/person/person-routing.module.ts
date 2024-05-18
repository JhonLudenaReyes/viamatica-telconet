import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPersonComponent } from './components/list-person/list-person.component';
import { PersonRegisterComponent } from './components/person-register/person-register.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list-person',
        component: ListPersonComponent,
      },
      {
        path: 'person-register',
        component: PersonRegisterComponent,
      },
      {
        path: '**',
        redirectTo: 'list-person',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class PersonRoutingModule {}

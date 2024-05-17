import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { UsersListComponent } from './components/users-list/users-list.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'users-list',
        component: UsersListComponent,
      },
      {
        path: 'search-user',
        component: UserSearchComponent,
      },
      {
        path: 'user-register',
        component: UserRegisterComponent,
      },
      {
        path: '**',
        redirectTo: 'users-list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class UserRoutingModule {}

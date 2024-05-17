import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';

import { UserRoutingModule } from './user-routing.module';

import { LoginComponent } from './components/login/login.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UsersListComponent } from './components/users-list/users-list.component';

//Modulos para mensajes de confirmacion
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    LoginComponent,
    UserSearchComponent,
    UserRegisterComponent,
    UsersListComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    RouterModule,
    ToastModule,
    FormsModule,
    CardModule,
    ImageModule,
    ReactiveFormsModule,
    UserRoutingModule,
  ],
})
export class UserModule {}

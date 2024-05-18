import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonRegisterComponent } from './components/person-register/person-register.component';
import { ListPersonComponent } from './components/list-person/list-person.component';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';

//Modulos para mensajes de confirmacion
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { PersonRoutingModule } from './person-routing.module';

@NgModule({
  declarations: [PersonRegisterComponent, ListPersonComponent],
  imports: [
    CommonModule,
    TableModule,
    RouterModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    CardModule,
    ImageModule,
    ToastModule,
    ConfirmDialogModule,
    MessagesModule,
    PersonRoutingModule,
  ],
})
export class PersonModule {}

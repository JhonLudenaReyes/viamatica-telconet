import { Component, OnInit } from '@angular/core';
import { Person } from '../../interfaces/person.interface';
import { PersonService } from '../../services/person.service';

import { Router } from '@angular/router';

import {
  ConfirmationService,
  MessageService,
  ConfirmEventType,
} from 'primeng/api';

import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css'],
  providers: [ConfirmationService, MessageService],
})
export class ListPersonComponent implements OnInit {
  people: Person[] = [];

  constructor(
    private personService: PersonService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getListPeople();
  }

  getListPeople() {
    this.personService
      .getPeopleActive()
      .subscribe((response) => (this.people = response));
  }

  addPerson() {
    this.router.navigate(['person/person-register']);
  }

  editPerson(person: Person) {
    this.personService.addPerson(person);
    this.router.navigate(['person/person-register']);
  }

  deletePerson(event: Event, person: Person) {
    // this.personService.deletePerson(personId).subscribe((response) => {
    //   this.getListPeople();
    // });

    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `¿Está seguro que desea eliminar ${person.name} ${person.lastName} de la lista de personas?`,
      header: 'Eliminar Confirmación',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-text',
      acceptIcon: 'none',
      rejectIcon: 'none',

      accept: () => {
        this.personService.deletePerson(person.personId!).subscribe({
          next: () => {
            this.getListPeople();
            this.messageService.add({
              severity: 'info',
              summary: 'Confirmado',
              detail: 'Registro eliminado',
            });
          },
          error: (error) => {
            console.log(error);
            this.addError(error);
          },
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rechazado',
          detail: `Has rechazado eliminar ${person.name} ${person.lastName} de la lista de roles`,
        });
      },
    });
  }

  // MUESTRA MENSAJE DE ERROR AL PROCESAR EL REGISTRO
  addError(error: HttpErrorResponse) {
    this.messageService.add({
      severity: 'error',
      summary: 'Sus datos no han podido ser procesados',
      detail: `Error: ${error.statusText}, ${error.message}.`,
    });
  }
}

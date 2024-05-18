import { Component, OnInit } from '@angular/core';
import { Person } from '../../interfaces/person.interface';
import { PersonService } from '../../services/person.service';

import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-register',
  templateUrl: './person-register.component.html',
  styleUrls: ['./person-register.component.css'],
  providers: [MessageService],
})
export class PersonRegisterComponent implements OnInit {
  person!: Person;

  personId!: number;
  name: string = '';
  lastName: string = '';
  identificationCard: string = '';
  birthDate: string = '';

  constructor(
    private personService: PersonService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.personService.person) {
      this.personId = this.personService.person.personId || 0;
      this.name = this.personService.person.name;
      this.lastName = this.personService.person.lastName;
      this.identificationCard = this.personService.person.identificationCard;
      this.birthDate = this.personService.person.birthDate;
    }
  }

  save() {
    if (!this.personId) {
      this.person = {
        name: this.name,
        lastName: this.lastName,
        identificationCard: this.identificationCard,
        birthDate: this.birthDate,
      };

      this.personService
        .savePerson(this.person)
        .subscribe((response) => console.log(response));
    } else {
      this.person = {
        personId: this.personId,
        name: this.name,
        lastName: this.lastName,
        identificationCard: this.identificationCard,
        birthDate: this.birthDate,
      };

      this.personService
        .updatePerson(this.person)
        .subscribe((response) => this.clearPersonService());
    }

    this.addConfirmation();

    this.clearForm();
  }

  //METODO QUE LIMPIA LA VARIABLE PERSON DEL SERVICIO
  // LUEGO DE QUE SE HAYA EDITADO O REGRESADO A LA LISTA DE PERSONAS
  clearPersonService() {
    this.personService.person = {
      personId: 0,
      name: '',
      lastName: '',
      identificationCard: '',
      birthDate: '',
    };
  }

  clearBackList() {
    this.clearPersonService();
    this.router.navigate(['person/people-list']);
  }

  // MUESTRA MENSAJE DE CONFIRMACION DEL REGISTRO GUARDADO
  addConfirmation() {
    this.messageService.add({
      severity: 'success',
      summary: 'Estado de los datos',
      detail: 'Sus datos se han guardado satisfactoriamente',
    });
  }

  //LIMPIA EL FORMULARIO DE REGISTROS
  clearForm() {
    this.personId = 0;
    this.name = '';
    this.lastName = '';
    this.identificationCard = '';
    this.birthDate = '';
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Person } from 'src/app/person/interfaces/person.interface';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
  providers: [MessageService],
})
export class UserSearchComponent implements OnInit {
  people: Person[] = [];
  search: string = '';

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addPerson() {
    this.router.navigate(['person/register']);
  }

  searchPerson() {
    this.userService
      .getSearchPeopleActive(this.search)
      .subscribe((response) => (this.people = response));
    this.clearForm();
  }

  selectPerson(person: Person) {
    this.userService.person = person;
    this.router.navigate(['user/user-register']);
  }

  //METODO QUE LIMPIA LA VARIABLE PERSON DEL SERVICIO
  // LUEGO DE QUE SE HAYA EDITADO O REGRESADO A LA LISTA DE PERSONAS
  clearGenderService() {
    /*this.genderService.gender = {
      genderId: 0,
      genderName: '',
    };*/
  }

  clearBackList() {
    this.clearGenderService();
    this.router.navigate(['gender/genders-list']);
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
    this.search = '';
  }
}

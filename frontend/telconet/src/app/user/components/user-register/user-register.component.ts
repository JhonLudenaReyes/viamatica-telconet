import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user.interface';

import { MessageService } from 'primeng/api';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
  providers: [MessageService],
})
export class UserRegisterComponent implements OnInit {
  user!: User;

  personId!: number;
  name: string = '';
  lastName: string = '';
  identificationCard: string = '';
  birthDate: Date = new Date();

  userId: number = 0;
  userName = '';
  password = '';
  email = '';

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private router: Router
  ) {}
  ngOnInit(): void {
    if (this.userService.person) {
      this.personId = this.userService.person.personId || 0;
      this.name = this.userService.person.name;
      this.lastName = this.userService.person.lastName;
      this.identificationCard = this.userService.person.identificationCard;
      this.birthDate = this.userService.person.birthDate;
    }
  }
  clearBackList() {
    this.router.navigate(['user/users-list']);
  }

  searchPerson() {
    this.router.navigate(['user/search-person']);
  }

  save() {
    if (!this.userId) {
      this.user = {
        personId: this.personId,
        userName: this.userName,
        password: this.password,
      };

      this.userService
        .saveUser(this.user)
        .subscribe((response) => console.log(response));
    } /* else {
      this.person = {
        personId: this.personId,
        name: this.name,
        lastName: this.lastName,
        identificationCard: this.identificationCard,
        cellPhone: this.cellPhone,
        address: this.address,
      };

      this.clientService
        .updatePerson(this.client)
        .subscribe((response) => this.clearPersonService());
    }

    */
    this.addConfirmation();

    this.clearForm();
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
    this.birthDate = new Date();
    this.password = '';
  }
}

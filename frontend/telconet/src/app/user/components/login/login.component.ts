import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserPersonRole } from '../../interfaces/userPersonRole';
import { UserService } from '../../services/user.service';
import { NavigationService } from 'src/app/navigation/services/navigation.service';

import { MessageService } from 'primeng/api';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserLogin } from '../../interfaces/userLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService],
})
export class LoginComponent {
  userForm!: FormGroup;
  userLogin!: UserPersonRole;
  userData!: UserLogin;

  // Definir mensajes de error para usuario
  errorMessagesUser = {
    required: 'Debe ingresar nombre de usuario',
    minlength: 'El usuario debe tener al menos 5 caracteres',
    maxlength: 'El usuario debe tener un máximo de 20 caracteres',
  };

  // Definir mensajes de error para contraseña
  errorMessagesPassword = {
    required: 'Debe ingresar una contraseña',
    minlength: 'El usuario debe tener al menos 5 caracteres',
    maxlength: 'El usuario debe tener un máximo de 10 caracteres',
  };

  get user() {
    return this.userForm.get('user') as FormControl;
  }

  get password() {
    return this.userForm.get('password') as FormControl;
  }

  constructor(
    private readonly fb: FormBuilder,
    private userService: UserService,
    private navigationService: NavigationService,
    private messageService: MessageService,
    private router: Router
  ) {
    this.userForm = this.initUserForm();
  }

  initUserForm(): FormGroup {
    return this.fb.group({
      user: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ],
      ],
    });
  }

  // Método para obtener mensajes de error
  getErrorMessageUser(controlName: string) {
    const control = this.userForm.get(controlName);
    if (control == null) {
      return;
    }
    for (const error in control.errors) {
      if (control.errors.hasOwnProperty(error) && control.touched) {
        switch (error) {
          case 'required':
            return this.errorMessagesUser.required;
          case 'minlength':
            return this.errorMessagesUser.minlength;
          case 'maxlength':
            return this.errorMessagesUser.maxlength;
          default:
            return;
        }
      }
    }
    return '';
  }

  // Método para obtener mensajes de error
  getErrorMessagePassword(controlName: string) {
    const control = this.userForm.get(controlName);
    if (control == null) {
      return;
    }
    for (const error in control.errors) {
      if (control.errors.hasOwnProperty(error) && control.touched) {
        switch (error) {
          case 'required':
            return this.errorMessagesPassword.required;
          case 'minlength':
            return this.errorMessagesPassword.minlength;
          case 'maxlength':
            return this.errorMessagesPassword.maxlength;
          default:
            return;
        }
      }
    }
    return '';
  }

  iniciarSesion() {
    this.userData = {
      user: this.userForm.get('user')?.value,
      password: this.userForm.get('password')?.value,
    };

    this.userService
      .getUserLogIn(this.userData.user, this.userData.password)
      .subscribe({
        next: (userLogin) => {
          this.userLogin = userLogin;

          sessionStorage.setItem('userLogin', JSON.stringify(this.userLogin));
          localStorage.setItem(
            'panelState',
            JSON.stringify({ panelState: true })
          );

          this.router.navigate(['dashboard/administrator']);

          this.navigationService._navigationRefresh = true;
        },
        error: (response) => {
          if (response.error.status === 404) {
            this.loginError();
          }
        },
      });
  }

  // MUESTRA MENSAJE INICIO DE SESIÓN FALLIDO
  loginError() {
    this.messageService.add({
      severity: 'error',
      summary: 'Inicio de sesión fallido',
      detail: 'Su usuario o contraseña son incorrectos',
    });
  }
}

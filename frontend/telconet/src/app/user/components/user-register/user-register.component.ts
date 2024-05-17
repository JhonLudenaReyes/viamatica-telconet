import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent {
  constructor(private router: Router) {}
  clearBackList() {
    this.router.navigate(['user/users-list']);
  }
  searchPerson() {
    this.router.navigate(['client/search-person']);
  }
}

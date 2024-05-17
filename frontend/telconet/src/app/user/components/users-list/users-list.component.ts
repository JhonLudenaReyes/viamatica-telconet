import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';

import { UserPersonRole } from '../../interfaces/userPersonRole';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  users: UserPersonRole[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getUsersList();
  }

  getUsersList() {
    this.userService
      .getUsersPersonRole()
      .subscribe((users) => (this.users = users));
  }

  addClient() {
    this.router.navigate(['user/user-register']);
  }

  editClient(user: User) {}

  deleteClient(userId: BigInteger) {}
}

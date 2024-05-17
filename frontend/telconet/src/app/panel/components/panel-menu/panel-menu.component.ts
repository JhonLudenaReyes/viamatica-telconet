import { Component, DoCheck, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Profile } from 'src/app/user/interfaces/profile.interface';
import { UserPersonRole } from 'src/app/user/interfaces/userPersonRole';

@Component({
  selector: 'app-panel-menu',
  templateUrl: './panel-menu.component.html',
  styleUrls: ['./panel-menu.component.css'],
})
export class PanelMenuComponent implements OnInit, DoCheck {
  items!: MenuItem[];

  habilitar: boolean = false;
  userLogin!: UserPersonRole;
  permissionsLogin!: Profile[];

  constructor() {}

  ngDoCheck(): void {
    if (this.permissionsLogin.length < 1) {
      this.permissionsLogin = JSON.parse(
        localStorage.getItem('permissionsLogin') || '[]'
      );
      this.addMenu(this.permissionsLogin);
    }
  }

  ngOnInit(): void {
    this.userLogin = JSON.parse(sessionStorage.getItem('userLogin') || '{}');
    this.permissionsLogin = JSON.parse(
      localStorage.getItem('permissionsLogin') || '[]'
    );

    if (this.userLogin.userId) {
      this.habilitar = true;
      this.addMenu(this.permissionsLogin);
    }
  }

  addMenu(permissions: Profile[]) {
    let user: boolean = true;
    let person: boolean = true;
    let client: boolean = true;
    let gender: boolean = true;
    let role: boolean = true;
    let profile: boolean = true;

    if (
      permissions.find(
        (permision) =>
          permision.permissionId === 1 ||
          permision.permissionId === 2 ||
          permision.permissionId === 3 ||
          permision.permissionId === 4
      )
    ) {
      user = false;
    }

    if (
      permissions.find(
        (permision) =>
          permision.permissionId === 5 ||
          permision.permissionId === 6 ||
          permision.permissionId === 7 ||
          permision.permissionId === 8
      )
    ) {
      person = false;
    }

    if (
      permissions.find(
        (permision) =>
          permision.permissionId === 9 ||
          permision.permissionId === 10 ||
          permision.permissionId === 11 ||
          permision.permissionId === 12
      )
    ) {
      client = false;
    }

    if (
      permissions.find(
        (permision) =>
          permision.permissionId === 13 ||
          permision.permissionId === 14 ||
          permision.permissionId === 15 ||
          permision.permissionId === 16
      )
    ) {
      gender = false;
    }

    if (
      permissions.find(
        (permision) =>
          permision.permissionId === 17 ||
          permision.permissionId === 18 ||
          permision.permissionId === 19 ||
          permision.permissionId === 20
      )
    ) {
      role = false;
    }

    if (
      permissions.find(
        (permision) =>
          permision.permissionId === 21 ||
          permision.permissionId === 22 ||
          permision.permissionId === 23 ||
          permision.permissionId === 24
      )
    ) {
      profile = false;
    }

    permissions.map(() => {
      this.items = [
        {
          disabled: user,
          label: 'Usuario',
          icon: 'pi pi-fw pi-users',
          routerLink: 'user/users-list',
        },
        {
          disabled: person,
          label: 'Persona',
          icon: 'pi pi-fw pi-user',
          routerLink: '/person/people-list',
        },
        {
          disabled: client,
          label: 'Cliente',
          icon: 'pi pi-fw pi-user',
          routerLink: '/client/clients-list',
        },
        {
          disabled: gender,
          label: 'Género',
          icon: 'pi pi-fw pi-users',
          routerLink: 'gender/genders-list',
        },
        {
          disabled: role,
          label: 'Rol',
          icon: 'pi pi-fw pi-cog',
          routerLink: 'role/roles-list',
        },
        {
          disabled: profile,
          label: 'Profile',
          icon: 'pi pi-fw pi-cog',
          routerLink: 'profile/profile-register',
        },
      ];
    });
  }
}

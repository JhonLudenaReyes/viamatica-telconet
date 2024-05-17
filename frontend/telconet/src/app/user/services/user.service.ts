import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserPersonRole } from '../interfaces/userPersonRole';
import { Observable } from 'rxjs';
import { Profile } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  /*Obtiene la lista completa de usuarios registrados
  con la persona y el rol que les pertenecen*/
  getUsersPersonRole(): Observable<UserPersonRole[]> {
    return this.http.get<UserPersonRole[]>(
      `https://localhost:7071/users-person-role`
    );
  }

  getUserLogIn(user: string, password: string): Observable<UserPersonRole> {
    return this.http.get<UserPersonRole>(
      `https://localhost:7071/Session/Login/User/${user}/${password}`
    );
  }

  getLoginPermissions(roleId: number): Observable<Profile[]> {
    return this.http.get<Profile[]>(
      `https://localhost:7071/profiles/search-by-role/${roleId}`
    );
  }
}

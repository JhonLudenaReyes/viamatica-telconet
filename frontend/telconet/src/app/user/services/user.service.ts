import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserPersonRole } from '../interfaces/userPersonRole';
import { Observable } from 'rxjs';

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
      `http://localhost:8080/telconet/web-service/api/users/session-login?userName=${user}&password=${password}`
    );
  }
}

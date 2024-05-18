import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserPersonRole } from '../interfaces/userPersonRole';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { Person } from 'src/app/person/interfaces/person.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user!: User;

  person!: Person;

  constructor(private http: HttpClient) {}

  /*Obtiene la lista completa de usuarios registrados
  con la persona y el rol que les pertenecen*/
  getUsersPersonRole(): Observable<UserPersonRole[]> {
    return this.http.get<UserPersonRole[]>(
      `http://localhost:8080/telconet/web-service/api/users/users-list`
    );
  }

  getSearchPeopleActive(search: string): Observable<Person[]> {
    return this.http.get<Person[]>(
      `http://localhost:8080/telconet/web-service/api/people/search-people-active?search=${search}`
    );
  }

  getUserLogIn(user: string, password: string): Observable<UserPersonRole> {
    return this.http.get<UserPersonRole>(
      `http://localhost:8080/telconet/web-service/api/users/session-login?userName=${user}&password=${password}`
    );
  }

  saveUser(user: User): Observable<User> {
    return this.http.post<User>(
      `http://localhost:8080/telconet/web-service/api/users/save-user`,
      user
    );
  }
}

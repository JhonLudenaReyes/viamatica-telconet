import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../interfaces/person.interface';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private http: HttpClient) {}

  person!: Person;

  getPeopleActive(): Observable<Person[]> {
    return this.http.get<Person[]>(
      `http://localhost:8080/telconet/web-service/api/people/people-list`
    );
  }

  // Agrega una persona de la lista de personas para editar
  addPerson(person: Person) {
    this.person = person;
  }

  savePerson(person: Person): Observable<Person> {
    return this.http.post<Person>(
      `http://localhost:8080/telconet/web-service/api/people/save-person`,
      person
    );
  }

  updatePerson(person: Person): Observable<any> {
    return this.http.put<any>(
      `http://localhost:8080/telconet/web-service/api/people/update-person`,
      person
    );
  }

  deletePerson(personId: number): Observable<any> {
    return this.http.delete<any>(
      `http://localhost:8080/telconet/web-service/api/people/delete-person?personId=${personId}`
    );
  }
}

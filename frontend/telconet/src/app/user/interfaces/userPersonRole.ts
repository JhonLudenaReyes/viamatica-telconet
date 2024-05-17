export interface UserPersonRole {
  userId?: number;
  personId: number;
  userName: string;
  password: string;
  email: string;
  attempts: number;
  state?: string;
  person?: Person;
  roles?: Role[];
}

export interface Person {
  personId?: number;
  name: string;
  lastName: string;
  identificationCard: string;
  birthDate: string;
  state: string;
}

export interface Role {
  roleId?: number;
  role: string;
  state: string;
}

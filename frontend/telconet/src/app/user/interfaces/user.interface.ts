export interface User {
  userId?: number;
  userName: string;
  email: string;
  password: string;
  state?: string;
  roleId: number;
  personId: number;
}

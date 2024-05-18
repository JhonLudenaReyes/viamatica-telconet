export interface User {
  userId?: number;
  personId: number;
  userName: string;
  password: string;
  email?: string;
  attempts?: number;
  state?: string;
}

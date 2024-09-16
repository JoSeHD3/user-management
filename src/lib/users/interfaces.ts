export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface UsersState {
  users: User[];
  loading: boolean;
}

export interface FiltersState {
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface LoginFormType {
  email: string;
  password: string;
}

export interface AccountFormType {
  email: string;
  name: string;
  lastName: string;
  phone: number;
  password: string;
  confirmPassword: string;
}

export interface GetTokenType {
  token: string | null;
}

export interface UserType {
  id: number;
  email: string;
  nombre: string;
  apellido: string;
  celular: number;
}

export interface UpdatePhoneType {
  id: number;
  phone: number;
}

import { ProductsStore } from "./productTypes";

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

export interface UserOrder {
  address: string;
  name: string;
  lastName: string;
  email: string;
  comuna: string;
  phone: number;
  products: ProductsStore[];
}

export type InputsAddressForm = {
  name: string;
  address: string;
  comuna: string;
};

export type Address = {
  id: number;
  id_user: number;
} & InputsAddressForm;

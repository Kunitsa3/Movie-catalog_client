export interface registerData {
  email: string;
  username: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  username: string;
  password: string;
}

export interface logInData {
  email: string;
  password: string;
}

export interface logOutData {
  email: string;
  password: string;
}

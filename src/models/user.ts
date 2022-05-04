export interface IUserLogin {
  login: string;
  password: string;
}

export interface IUserRegistration {
  login: string;
  password: string;
  passwordConfirm: string;
}

export interface ICreateEmployee {
  name: string;
  positionAtWork: string;
  avatar?: string;
}

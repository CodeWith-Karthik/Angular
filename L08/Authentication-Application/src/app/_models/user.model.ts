export interface IUser {
  emailAddress: string;
  password: string;
}

export interface ICurrentUser {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
}

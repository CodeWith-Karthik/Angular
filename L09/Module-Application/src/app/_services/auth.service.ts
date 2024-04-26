import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ICurrentUser, IUser } from '../_models/user.model';
import { BehaviorSubject } from 'rxjs';

const BASE_URL = 'https://identitytoolkit.googleapis.com/v1/accounts';
const API_KEY = 'AIzaSyAlu4tQ3OzwSakVFMZpSKLxwicQn7HqW_8';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSource = new BehaviorSubject<ICurrentUser | null>(null);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  register(user: IUser) {
    let registerModel = {
      email: user.emailAddress,
      password: user.password,
      returnSecureToken: true,
    };

    this.http
      .post(BASE_URL + `:signUp?key=${API_KEY}`, registerModel)
      .subscribe((response: ICurrentUser) => {
        const user = {
          idToken: response.idToken,
          email: response.email,
          refreshToken: response.refreshToken,
          expiresIn: response.expiresIn,
        };

        this.currentUserSource.next(user);
        this.setLocalStorage(user);

        this.router.navigateByUrl('/');
      });
  }

  login(user: IUser) {
    let loginModel = {
      email: user.emailAddress,
      password: user.password,
      returnSecureToken: true,
    };

    this.http
      .post(BASE_URL + `:signInWithPassword?key=${API_KEY}`, loginModel)
      .subscribe((response: ICurrentUser) => {
        const user = {
          idToken: response.idToken,
          email: response.email,
          refreshToken: response.refreshToken,
          expiresIn: response.expiresIn,
        };

        this.currentUserSource.next(user);
        this.setLocalStorage(user);

        this.router.navigateByUrl('/');
      });
  }

  logout() {
    this.removeLocalStorage();
    this.currentUserSource.next(null);
  }

  autoLogin() {
    var user: ICurrentUser = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.currentUserSource.next(user);
    }
  }

  setLocalStorage(user: ICurrentUser) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  removeLocalStorage() {
    localStorage.removeItem('user');
  }
}

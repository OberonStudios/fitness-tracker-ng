import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  authServiceChange = new Subject<boolean>();
  private user: User;

  constructor(private router: Router) {
    this.user = null;
  }

  registerUser(authData: AuthData) {
    this.user = {
      userEmail: authData.authEmail,
      userId: Math.round(Math.random()*1000).toString()
    };
    this.authHandle();
  }

  loginUser(authData: AuthData) {
    this.user = {
      userEmail: authData.authEmail,
      userId: Math.round(Math.random()*1000).toString()
    };
    this.authHandle();
  }

  logoutUser() {
    this.user = null;
    this.authServiceChange.next(false);
    this.router.navigate(['/login']);
  }

  private authHandle () {
    this.authServiceChange.next(true);
    this.router.navigate(['/train']);
  }

  getUser() {
    return { ...this.user };
  }

  userIsAuth() {
    return this.user !== null
  }
}
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  MIN_AGE = 12;
  maxDate: Date;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - this.MIN_AGE)
  }

  onSubmit(loginForm: NgForm) {
    this.authService.registerUser({
      authEmail: loginForm.value.email,
      authPassword: loginForm.value.password
    });
  }
}

import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUser } from '../_models/user.model';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrl: './user-auth.component.css',
})
export class UserAuthComponent {
  isRegisterMode: boolean = false;
  user: IUser = { emailAddress: '', password: '' };

  @ViewChild('f') authForm: NgForm;

  registerToggle() {
    this.isRegisterMode = !this.isRegisterMode;
  }

  // onSubmit(form: NgForm) {
  //   this.user.emailAddress = form.value.emailAddress;
  //   this.user.password = form.value.userPassword;
  //   console.log(this.user);
  // }

  onSubmit() {
    this.user.emailAddress = this.authForm.value.emailAddress;
    this.user.password = this.authForm.value.userPassword;
    console.log(this.user);
  }
}

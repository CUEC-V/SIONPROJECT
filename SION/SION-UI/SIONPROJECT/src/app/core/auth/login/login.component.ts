import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from './models/login-model';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { PasswordModel } from './models/password-model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  cookie: string = '';
  loginFormGroup!: FormGroup;
  passwordFormGroup!: FormGroup;

  loginModel!: LoginModel;
  isLoginEmail: boolean = true;
  isLoginPassword: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.cookie = this.randoMstring();
    console.log(this.cookie);
    this.loginFormGroup = new FormGroup({
      cookie: new FormControl(this.cookie),
      loginTapeFormCtrl: new FormControl('', [Validators.required, Validators.email])
    })
  }

  onSubmit() {
    var value = this.loginFormGroup.value as LoginModel;
    if (value.cookie !== this.cookie) {
      return;
    }

    this.authService.loginByEmail(value).subscribe({
      next: login => {
        this.loginModel = login;
        if (!this.loginModel) {
          this.router.navigate(['/']);
        }

        this.isLoginEmail = false;
        this.cookie = this.randoMstring();
        this.isLoginPassword = true;

        this.passwordFormGroup = new FormGroup({
          cookie: new FormControl(this.cookie),
          loginTapeFormCtrl: new FormControl(this.loginModel.loginTapeFormCtrl, [Validators.required, Validators.email]),
          passwordTapeFormCtrl: new FormControl('', [Validators.required])
        })

      },
      error: err => console.log(err)
    })
    // console.log(this.cookie);
    // console.log(value.cookie);
  }

  onPwdSubmit() {
    var value = this.passwordFormGroup.value as PasswordModel;
    this.authService.loginByPassWord(value).subscribe({
      next: pwd => {
        if (pwd && Boolean(pwd)) {
          this.router.navigate(['/administration-general']);
        }
      },
      error: err => console.log(err)
    })

    console.log(value);
  }

  randoMstring(length: number = 10) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }
}

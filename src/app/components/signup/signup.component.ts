import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterService } from 'src/app/services/register.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private service: RegisterService,
    private snackbar: MatSnackBar
  ) {}
  signupForm = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    Family: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.email]),
    Password: new FormControl(0, [Validators.required]),
    NationalCode: new FormControl('', [Validators.required]),
    Picture: new FormControl('', [Validators.required]),
    Phone: new FormControl(0, [Validators.required]),
  });
  get Name() {
    return this.signupForm.get('Name');
  }
  get Family() {
    return this.signupForm.get('Family');
  }
  get Email() {
    return this.signupForm.get('Email');
  }
  get Phone() {
    return this.signupForm.get('Phone');
  }
  get NationalCode() {
    return this.signupForm.get('NationalCode');
  }
  get Password() {
    return this.signupForm.get('Password');
  }
  get Picture() {
    return this.signupForm.get('Picture');
  }
  openSnackBar(message: string) {
    this.snackbar.open(message, 'undo', {
      duration: 3000,
      horizontalPosition: 'right',
    });
  }
  name: string = '';
  family: string = '';
  email: string = '';
  phone: number = 0;
  password: number = 0;
  nationalCode: string = '';
  picture: string = '';
  fireAddUser() {
    var registercase = {
      name: this.name,
      family: this.family,
      email: this.email,
      password: this.password,
      phone: this.phone,
      nationalCode: this.nationalCode,
      picture: this.picture,
    };
    this.service.addRegister(registercase).subscribe((res: any) => {
      console.log(res);
    });
    this.openSnackBar('ثبت نام با موفقیت انجام شد');
    return registercase;
  }

  ngOnInit(): void {}
}

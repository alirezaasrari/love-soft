import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterService } from 'src/app/services/register.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private service: RegisterService ,private snackbar: MatSnackBar) {}
  openSnackBar(message: string) {
    this.snackbar.open(message, 'undo', {
      duration: 3000,
      horizontalPosition: 'right',
    });
  }
  name:string = "";
  family: string = "";
  email: string = "";
  phone: number = 0;
  password: number = 0;
  nationalCode: string = "";
  picture: string = "";
  fireAddUser (){
    var registercase = {
      name: this.name,
      family: this.family,
      email: this.email,
      password: this.password,
      phone:this.phone,
      nationalCode:this.nationalCode,
      picture: this.picture,
    }
    this.service.addRegister(registercase).subscribe((res:any)=>{
      console.log(res)
      })
      this.openSnackBar('ثبت نام با موفقیت انجام شد');
    return registercase
  }

  ngOnInit(): void {  
    }
  }


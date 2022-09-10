import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private service: RegisterService) {}
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
      phone:this.phone,
      password: this.password,
      nationalCode:this.nationalCode,
      picture: this.picture,
    }
    console.log(registercase);
    return registercase;
  }
  ngOnInit(): void {
    this.service.addRegister(this.fireAddUser());
    }
  }


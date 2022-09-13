import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required),
  });
  @Input() deviceXs: boolean;
  constructor() {}
   
  user = '';
  pass = '';

  loginToAdminPanel(){
    if(this.user == 'admin' && this.pass == 'admin'){
      
    }else{
     
    }
  }
  ngOnInit(): void {}

  get email() {
    return this.loginForm.get('email');
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() onDelete =new EventEmitter();
  constructor(private service: RegisterService) {}
  fireDeleteCard(){
  // this.service.deleteUser()
  }
  ngOnInit(): void {
  }

}

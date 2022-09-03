import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() onDelete =new EventEmitter();
  constructor() { }
  /*fireCardDelete(e){
    this.onDelete.emit(e)
  }*/
  ngOnInit(): void {
  }

}

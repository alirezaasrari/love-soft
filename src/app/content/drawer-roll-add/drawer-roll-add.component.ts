import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-drawer-roll-add',
  templateUrl: './drawer-roll-add.component.html',
  styleUrls: ['./drawer-roll-add.component.css'],
})
export class DrawerRollAddComponent implements OnInit {
  @Output() onAdd = new EventEmitter();
  color = '#ff0000';
  rollselected: {name:string,theme:string};
  roll: string;
  selectedValue : string;
  fireAddEvent() { 
    this.rollselected = {name:this.selectedValue,theme:this.color};
    this.onAdd.emit(this.rollselected);
  }
  chips = [
    { name: 'چیستا محمدی' },
    { name: 'ارژنگ امانی' },
    { name: 'پریچهر آشوری' },
    { name: 'گلاله توکل' },
  ];
  
  rolls: string[] = ['حسابدار','خدمات','مدیر', 'انباردار', 'کارشناس'];
  constructor() {}

  ngOnInit(): void {}
}

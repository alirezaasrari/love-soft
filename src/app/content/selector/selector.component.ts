import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {
  toppings = new FormControl('');

  toppingList: string[] = ['حسابدار', 'مدیر'];
  constructor() { }

  ngOnInit(): void {
  }

}

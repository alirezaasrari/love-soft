import { Component, OnInit, Input } from '@angular/core';
import {ThemePalette} from '@angular/material/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() deviceXs: boolean;
  @Input() selected: boolean = false;
  @Input() rollname: string;
  @Input() nameColor: string;
  @Input() personName: string;
  @Input() avatarColor: string;
  @Input() _email: string;
  @Input() name: string;
  @Input() password: number;
  @Input() count: number;
  color: ThemePalette = 'primary';
  checked = this.selected;
  disabled = false;
  checked2 = false;
  checkedClass = 'app-card-selected';
  constructor() { }
  ngOnInit(): void {
  }
}

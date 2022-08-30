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
  color: ThemePalette = 'primary';
  checked = this.selected;
  disabled = false;
  checked2 = false;
  constructor() { }
  ngOnInit(): void {
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
@Input() deviceXs: boolean;
openHeaderSearch = false;
toggle = false;
/*function tuggle():boolean {
  this.toggle = !toggle
}*/
}

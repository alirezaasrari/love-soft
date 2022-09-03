import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-navbar',
  templateUrl: './detail-navbar.component.html',
  styleUrls: ['./detail-navbar.component.css']
})
export class DetailNavbarComponent implements OnInit {
  @Input() deviceXs: boolean;
  constructor() { }
  ngOnInit(): void {
  }

}

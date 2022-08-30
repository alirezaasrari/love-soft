import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-header',
  templateUrl: './detail-header.component.html',
  styleUrls: ['./detail-header.component.css']
})
export class DetailHeaderComponent implements OnInit {
  @Input() deviceXs: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}

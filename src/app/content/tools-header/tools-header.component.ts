import { Component, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Observable, Subscription } from 'rxjs';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-tools-header',
  templateUrl: './tools-header.component.html',
  styleUrls: ['./tools-header.component.css']
})
export class ToolsHeaderComponent implements OnInit {
  rollList$: Observable<any[]>;
  selected: boolean = false;
  opened = false;
  constructor(public mediaObserver: MediaObserver,private service: RegisterService) { }

  mediaSub: Subscription;
  deviceXs: boolean;
  deviceLg: boolean;
  ngOnInit(): void {
    this.rollList$ = this.service.getRollList();
    this.mediaSub = this.mediaObserver
      .asObservable()
      .subscribe((change: MediaChange[]) => {
        this.deviceXs = change[0].mqAlias === 'xs' ? true : false;
        this.deviceLg = change[0].mqAlias === 'lg' ? true : false;
      });
  }
  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'last-practice';
  mediaSub:Subscription;
  deviceXs: boolean;
  deviceLg: boolean;
  constructor(public mediaObserver:MediaObserver){}
  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.asObservable().
    subscribe((change: MediaChange[]) => {
      this.deviceXs = change[0].mqAlias === 'xs' ? true : false;
      this.deviceLg = change[0].mqAlias === 'lg' ? true : false;
    });
  }
  ngOnDestroy(): void {
      this.mediaSub.unsubscribe()
  }
}

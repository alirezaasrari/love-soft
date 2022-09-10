import { Component, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  registeredList$: Observable<any[]>;
  constructor(public mediaObserver: MediaObserver, private service: RegisterService){}

  mediaSub: Subscription;
  deviceXs: boolean;
  deviceLg: boolean;
  ngOnInit(): void {
    
    this.registeredList$ = this.service.getRegisteredList()


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

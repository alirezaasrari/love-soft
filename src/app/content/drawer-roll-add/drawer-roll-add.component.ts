import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Observable, Subscription } from 'rxjs';
import { RegisterService } from 'src/app/services/register.service';

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
  rollList$: Observable<any[]>;
  @Output() onAdd = new EventEmitter();
  color = '#ff0000';
  rollselected: {name:string,theme:string,pname:string};
  roll: string;
  selectedValue : string;
  personname:string;
  fireAddEvent() { 
    this.rollselected = {name:this.selectedValue,
      theme:this.color,pname:this.personname};
    this.onAdd.emit(this.rollselected);
  }
  chips = [
    { name: 'چیستا محمدی' },
    { name: 'ارژنگ امانی' },
    { name: 'پریچهر آشوری' },
    { name: 'گلاله توکل' },
  ];
  
  constructor(
    public mediaObserver: MediaObserver,
    private service: RegisterService,
  ) {}
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

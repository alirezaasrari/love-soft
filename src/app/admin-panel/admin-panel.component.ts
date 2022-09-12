import { Component, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  userList$: Observable<any[]>;
  constructor(public mediaObserver: MediaObserver, private service: RegisterService
    ,private snackbar: MatSnackBar){}
  fireDeletePerson(id:number):void{
    this.service.deleteRegister(id).subscribe((res:any)=>{console.log(res);
    this.ngOnInit()});
    this.openSnackBar('فرد حذف گردید');
  }
  fireDeleteUser(id:number):void{
    this.service.deleteUser(id).subscribe((res:any)=>{console.log(res);
    this.ngOnInit()});
    this.openSnackBar('کاربر حذف گردید');
  }
  fireAddToUsers(id:number){
    this.service.postUserList({"registerId":id}).subscribe((res:any) => {console.log(res);
    this.ngOnInit()});
    this.openSnackBar('به لیست کاربران اضافه گردید');
  }
  fireAddRoll(id:number){
  }
  openSnackBar(message: string) {
    this.snackbar.open(message, 'undo', {
      duration: 3000,
      panelClass: ['green-snackbar'],
      horizontalPosition: 'right',
    });
  }
  mediaSub: Subscription;
  deviceXs: boolean;
  deviceLg: boolean;

  ngOnInit(): void {
    this.registeredList$ = this.service.getRegisteredList();
    this.userList$ = this.service.getUsersList()

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

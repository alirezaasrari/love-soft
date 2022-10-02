import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})

export class ContentComponent implements OnInit {
  constructor(
    public mediaObserver: MediaObserver,
    private snackbar: MatSnackBar,
    private service: RegisterService
  ) {}

  @Input() roll: string;
  display = false;
  selected: boolean = false;
  opened = false;
  titleColor: string;
  countnumber: number;

  newCardItem: { roll: string; titleColor: string; name: string, avatarColor: string, count:number };

  cards: any[] = [];

  openSnackBar(message: string) {
    this.snackbar.open(message, 'undo', {
      duration: 3000,
      horizontalPosition: 'right',
    });
  }

  numberOfCards = this.cards.length;
  cardAdd(e: any) {
    this.opened = false;
    this.newCardItem = { roll: e.name, titleColor: e.theme, name: e.pname,
       avatarColor: e.avatarColor, count: e.count };
    this.cards.push(this.newCardItem);
    this.openSnackBar('نقش اضافه گردید');
  }

  mediaSub: Subscription;
  deviceXs: boolean;
  deviceLg: boolean;
  _length: number;
  count = 0;
  registeredId: number[]; 
  ngOnInit(): void {

    this.service.getUsersList().subscribe((x) => {     
      this._length = x.length;
      this.registeredId = x.map((s) => s.registerId);
      for (let i = 0; i < this._length; i++) {
        this.service
          .getRegisteredById(this.registeredId[i])
          .subscribe((res: any) => {
            this.cards.push({
              name: res.name,
              roll: 'حسابدار',
              titleColor:'#DFF7E9',
              avatarColor: '#27B360',
              count : i++,
            });
          });
      }
    });

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

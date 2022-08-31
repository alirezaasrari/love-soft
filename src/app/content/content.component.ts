import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  constructor(
    public mediaObserver: MediaObserver,
    private snackbar: MatSnackBar
  ) {}
  @Input() roll:string;
  display = false;
  selected: boolean = false;
  opened = false;
  titleColor: string;
  newCardItem: { roll: string, titleColor:string, name: string };
  cards = [{ roll: 'حسابدار',titleColor:'#1d7137', name:'راضیه' },
   { roll: 'مدیر',titleColor:'#5271b4', name:'راضیه' }];
  openSnackBar(message: string) {
    this.snackbar.open(message, 'undo', {
      duration: 3000,
      horizontalPosition: 'right',
    });
  }
  numberOfCards = this.cards.length;
  cardAdd(e: any) {
    this.opened = false;
    this.newCardItem = { roll: e.name , titleColor: e.theme, name: e.pname};
    this.cards.push(this.newCardItem);
    this.openSnackBar('نقش اضافه گردید');
  }

  mediaSub: Subscription;
  deviceXs: boolean;
  deviceLg: boolean;
  ngOnInit(): void {
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

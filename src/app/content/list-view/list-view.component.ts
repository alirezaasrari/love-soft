import {SelectionModel} from '@angular/cdk/collections';
import {Component,Input} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { RegisterService } from 'src/app/services/register.service';

export interface PeriodicElement {
  name: string;
  usercode: string;
  roll: string;
  dateofjoin: string;
  email: string;
  lastactivity: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'چیستا محمدی', usercode: '100256', roll: 'حسابدار', dateofjoin: '1400/12/20', email: 'd@gmail.com', lastactivity: 'امروز-10:42'},
  {name: 'چیستا محمدی', usercode: '100256', roll: 'حسابدار', dateofjoin: '1400/12/20', email: 'd@gmail.com', lastactivity: 'امروز-10:42'},
  {name: 'چیستا محمدی', usercode: '100256', roll: 'حسابدار', dateofjoin: '1400/12/20', email: 'd@gmail.com', lastactivity: 'امروز-10:42'},
  {name: 'چیستا محمدی', usercode: '100256', roll: 'حسابدار', dateofjoin: '1400/12/20', email: 'd@gmail.com', lastactivity: 'امروز-10:42'},
];

/**
 * @title Table with selection
 */
@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class listViewComponent {
  displayedColumns: string[] = ['select', 'name', 'usercode', 'roll',
   'dateofjoin', 'email', 'lastactivity'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.name + 1}`;
  }
  mediaSub:Subscription;
  deviceXs: boolean;
  deviceLg: boolean;
  constructor(public mediaObserver:MediaObserver, private service: RegisterService){}
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

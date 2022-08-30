import {SelectionModel} from '@angular/cdk/collections';
import {Component,Input} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
  symbo: string;
  symbl: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'چیستا محمدی', name: '100256', weight: 'حسابدار', symbol: '1400/12/20', symbo: 'd@gmail.com', symbl: 'امروز-10:42'},
  {position: 'چیستا محمدی', name: '100256', weight: 'حسابدار', symbol: '1400/12/20', symbo: 'd@gmail.com', symbl: 'امروز-10:42'},
  {position: 'چیستا محمدی', name: '100256', weight: 'حسابدار', symbol: '1400/12/20', symbo: 'd@gmail.com', symbl: 'امروز-10:42'},
  {position: 'چیستا محمدی', name: '100256', weight: 'حسابدار', symbol: '1400/12/20', symbo: 'd@gmail.com', symbl: 'امروز-10:42'},
  {position: 'چیستا محمدی', name: '100256', weight: 'حسابدار', symbol: '1400/12/20', symbo: 'd@gmail.com', symbl: 'امروز-10:42'},
  {position: 'چیستا محمدی', name: '100256', weight: 'حسابدار', symbol: '1400/12/20', symbo: 'd@gmail.com', symbl: 'امروز-10:42'},
  {position: 'چیستا محمدی', name: '100256', weight: 'حسابدار', symbol: '1400/12/20', symbo: 'd@gmail.com', symbl: 'امروز-10:42'},
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
  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol', 'symbo', 'symbl'];
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
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
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

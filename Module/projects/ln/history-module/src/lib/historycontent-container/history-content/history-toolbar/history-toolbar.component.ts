import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'history-toolbar',
  templateUrl: './history-toolbar.component.html',
  styleUrls: ['./history-toolbar.component.less']
})
export class HistoryToolbarComponent {

  public selectValue = "Date Saved (Newest)"

  @Output()
  public sortByValues = new EventEmitter<any>();

  public check:boolean = false
  addActive()
  {
    this.check = !this.check
    // return this.check
    return this.check
  }
  sortData(event:any,value:any){
    this.sortByValues.emit(event);
    this.selectValue = value
    this.check = false
    return true
  }
}

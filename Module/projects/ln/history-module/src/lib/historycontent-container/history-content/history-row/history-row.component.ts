import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IHistoryItem } from "@ln/history-abstractions"

@Component({
  selector: 'history-row',
  templateUrl: './history-row.component.html',
  styleUrls: ['./history-row.component.less'],
  // encapsulation:ViewEncapsulation.None
})
export class HistoryRowComponent {

  @Input()
  public history:IHistoryItem[] =[]

}

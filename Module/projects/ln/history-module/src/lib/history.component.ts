import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'history-container',
  templateUrl: "history.html",
  styleUrls: ["history.less"],
  encapsulation: ViewEncapsulation.None
})
export class HistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

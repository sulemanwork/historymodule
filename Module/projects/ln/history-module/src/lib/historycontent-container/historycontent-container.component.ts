import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'historycontent-container',
  templateUrl: './historycontent-container.component.html',
  styleUrls: ['./historycontent-container.component.less']
})
export class HistorycontentContainerComponent implements OnInit {
  title = "history content container"
  constructor() { }

  ngOnInit(): void {
  }

  sum(a: number,b: number){

    return a + b
  }

}

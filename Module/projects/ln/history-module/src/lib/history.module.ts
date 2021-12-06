import { NgModule } from '@angular/core';
import { HistoryComponent } from './history.component';
import { CommonModule } from '@angular/common';
import { HistoryContentComponent } from './historycontent-container/history-content/history-content.component';
import { HistorycontentContainerComponent } from './historycontent-container/historycontent-container.component';
import { PaginationComponent } from './historycontent-container/history-content/pagination/pagination.component';
import { HistoryRowComponent } from './historycontent-container/history-content/history-row/history-row.component';
import { HistoryToolbarComponent } from './historycontent-container/history-content/history-toolbar/history-toolbar.component';



@NgModule({
  declarations: [
    HistoryComponent,
    HistoryContentComponent,
    HistorycontentContainerComponent,
    PaginationComponent,
    HistoryRowComponent,
    HistoryToolbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HistoryComponent,
    HistoryContentComponent,
    HistorycontentContainerComponent,
    PaginationComponent,
    HistoryRowComponent,
    HistoryToolbarComponent
  ]
})
export class HistoryModule { }

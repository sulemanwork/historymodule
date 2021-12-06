import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HistoryModule} from "../../projects/ln/history-module/src/public-api"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HistoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

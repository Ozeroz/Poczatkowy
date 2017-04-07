import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { Page1Component } from "./page1/page1.component";

@NgModule({
  imports:      [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    Page1Component
  ],
  bootstrap:    [
    AppComponent
  ]
})
export class AppModule { }

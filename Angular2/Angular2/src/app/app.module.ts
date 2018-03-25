import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { PepoleInfoComponent } from './pepole-info/pepole-info.component';


@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    PepoleInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

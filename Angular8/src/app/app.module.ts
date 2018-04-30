import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { Strings } from './shared/services/strings.service';
import { MainComponentComponent } from './main-component/main-component.component';
import{HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponentComponent,
    HeaderComponentComponent,
    MainComponentComponent
  ],
  imports: [
    BrowserModule,
HttpClientModule
  ],
  providers: [Strings],
  bootstrap: [AppComponent]
})
export class AppModule { }

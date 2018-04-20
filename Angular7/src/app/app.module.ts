import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { ArticleListComponentComponent } from './article-list-component/article-list-component.component';
import { ArticleInfoComponentComponent } from './article-info-component/article-info-component.component';
import { ArticlesList } from './shared/models/article-data.model';
import { ChoosenArticle } from './shared/models/choosen-article.model';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    ArticleListComponentComponent,
    ArticleInfoComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ArticlesList,ChoosenArticle],
  bootstrap: [AppComponent]
})
export class AppModule { }

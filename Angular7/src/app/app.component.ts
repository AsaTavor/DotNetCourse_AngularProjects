import { Component } from '@angular/core';
import { ChoosenArticle } from './shared/models/choosen-article.model';
import { Article } from './shared/models/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public choosenArticle:ChoosenArticle){
    
  }
  
}

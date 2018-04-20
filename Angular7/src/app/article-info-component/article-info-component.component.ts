import { Component, OnInit } from '@angular/core';
import { ArticlesList } from '../shared/models/article-data.model';
import { ChoosenArticle } from '../shared/models/choosen-article.model';

@Component({
  selector: 'app-article-info-component',
  templateUrl: './article-info-component.component.html',
  styleUrls: ['./article-info-component.component.css']
})
export class ArticleInfoComponentComponent implements OnInit {

  constructor(public articleList:ArticlesList,public choosenArticle:ChoosenArticle) { }

  ngOnInit() {
  }

}

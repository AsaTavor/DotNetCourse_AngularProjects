import { Component, OnInit, OnChanges } from '@angular/core';
import { ArticlesList } from '../shared/models/article-data.model';
import { ChoosenArticle } from '../shared/models/choosen-article.model';
import { Article } from '../shared/models/article.model';

@Component({
  selector: 'app-article-list-component',
  templateUrl: './article-list-component.component.html',
  styleUrls: ['./article-list-component.component.css']
})
export class ArticleListComponentComponent implements OnInit {
  constructor(public articleList:ArticlesList,public choosenArticle:ChoosenArticle) { 
  }

  ngOnInit() {
  }
func(i:number){
  this.choosenArticle.article=this.articleList.articleArray[i];
}

}

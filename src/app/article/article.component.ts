import { Component, OnInit ,Input} from '@angular/core';
import {Article } from './article.model';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article:Article;
  constructor() {
  }
  voteUp():boolean{
    console.log(this.article)
    this.article.voteUp()
    return false
  }
  voteDown():boolean{
    if(this.article.votes===0){
      return false
    }
    this.article.voteDown()
    return false
  }
  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import { HackerNewsService } from './app.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hacker-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  news = {};

  constructor(private hns: HackerNewsService) {
    this.hns.getNews().subscribe(data => this.news = data);
  }

}

import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HackerNewsService {
  constructor (
    private http: HttpClient
  ) {}

  getNews() {
    return this.http.get(`https://hn.algolia.com/api/v1/search_by_date?query=nodejs&tags=story`)
    .map((res: Response) => res);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewsEntry, SearchFilter } from 'src/app/models';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  public getNews(filter: SearchFilter): Observable<{ items: NewsEntry[] }> {
    const params: any = {};
    if (!!filter.topic) {
      params.q = filter.topic;
    }
    if (!!filter.country) {
      params.hl = `en-${filter.country}`;
      params.gl = filter.country;
      params.ceid = `${filter.country}:en`;
    }
    return this.http.get(environment.newsRSSEndPoint, {
      params: params as any,
    }) as any;
  }
}

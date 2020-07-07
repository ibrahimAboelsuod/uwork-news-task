import { Component } from '@angular/core';
import { NewsService } from './services/news-service/news.service';
import { NewsEntry, SearchFilter } from './models';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public newsEntries: NewsEntry[] = [];
  public isLoading = false;

  constructor(private newsService: NewsService) {
    this.loadNews({});
  }

  public loadNews(filter: SearchFilter): void {
    console.log(filter);
    this.isLoading = true;
    this.newsService
      .getNews(filter)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((res) => {
        this.newsEntries = res.items;
      });
  }
}

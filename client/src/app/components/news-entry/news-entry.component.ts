import { Component, OnInit, Input } from '@angular/core';
import { NewsEntry } from 'src/app/models';

@Component({
  selector: 'app-news-entry',
  templateUrl: './news-entry.component.html',
  styleUrls: ['./news-entry.component.scss'],
})
export class NewsEntryComponent implements OnInit {
  @Input() public newsEntry: NewsEntry;

  constructor() {}

  ngOnInit(): void {}
}

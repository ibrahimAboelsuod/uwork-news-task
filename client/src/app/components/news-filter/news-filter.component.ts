import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SearchFilter } from 'src/app/models';

@Component({
  selector: 'app-news-filter',
  templateUrl: './news-filter.component.html',
  styleUrls: ['./news-filter.component.scss'],
})
export class NewsFilterComponent implements OnInit {
  public filterForm = this.formBuilder.group({
    topic: [undefined],
    country: [undefined],
  });

  // tslint:disable-next-line: no-output-on-prefix
  @Output() public onSubmitSearch = new EventEmitter<SearchFilter>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  public submitSearch(): void {
    this.onSubmitSearch.emit(this.filterForm.value);
  }
}

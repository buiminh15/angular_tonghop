import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() queryEvt = new EventEmitter();
  query: any;
  constructor() { }

  ngOnInit(): void {
  }

  handleQuery() {
    this.queryEvt.emit(this.query);
  }

}

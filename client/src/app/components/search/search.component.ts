import { Component, OnInit } from '@angular/core';
import { ToursService } from 'src/app/shared/tours.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  isError;
  message;
  tours = [];
  result;
  constructor(private service: ToursService) {}

  ngOnInit() {}
  search() {
    let checkbox = <HTMLInputElement>document.getElementById('gte');
    let duration = (<HTMLInputElement>document.getElementById('duration'))
      .value;
    let difficulty = (<HTMLInputElement>document.getElementById('difficulty'))
      .value;
    let query: any = { duration: duration, difficulty: difficulty };
    if (duration === '') {
      delete query['duration']
    }
    if (difficulty === '') {
      delete query['difficulty']
    }
    if (checkbox.checked === true) {
      this.service.getQuery(duration).subscribe(
        result => {
          this.isError = false;
          this.result = result;
          this.tours = this.result.data.tours;
        },
        error => {
          this.isError = true;
          this.message = 'Wrong query';
        }
      );
    } else {
      this.service.getAll(query).subscribe(
        result => {
          this.isError = false;
          this.result = result;
          this.tours = this.result.data.tours;
        },
        error => {
          this.isError = true;
          this.message = 'Wrong query';
        }
      );
    }
  }
}

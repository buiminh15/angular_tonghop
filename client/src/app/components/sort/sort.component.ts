import { Component, OnInit } from '@angular/core';
import { ToursService } from 'src/app/shared/tours.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
  isError;
  message;
  tours = [];
  result;

  constructor(private service: ToursService) { }

  ngOnInit() {

  }

  sort() {
    let sortBy = (<HTMLInputElement>document.getElementById('sort')).value;
    let query = {
      sort: sortBy
    }
    console.log('query', query);
    this.service.getAll(query).subscribe(results => {
      this.isError = false;
      this.result = results
      this.tours = this.result.data.tours;
    },
    error => {
      this.isError = true;
      this.message = 'Wrong query';
    })
  }
}

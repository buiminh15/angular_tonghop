import { Component, OnInit } from '@angular/core';
import { ToursService } from 'src/app/shared/tours.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  isError;
  message;
  tours = [];
  result;
  activePage = "page-item"
  constructor(private service: ToursService) { }

  ngOnInit() {
    this.page(1)
  }

  page(pageNum) {

    const query: any = { page: pageNum, limit: 3 };
    this.service.getAll(query).subscribe(
      result => {
        this.isError = false;
        this.result = result;
        this.tours = this.result.data.tours;
        console.log(this.tours);
        this.activePage = "page-item active"
      },
      error => {
        this.isError = true;
        this.message = 'Wrong query';
      }
    );

  }
}

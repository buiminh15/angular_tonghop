import { Component, OnInit } from '@angular/core';
import { ToursService } from 'src/app/shared/tours.service';

@Component({
  selector: 'app-limit-fields',
  templateUrl: './limit-fields.component.html',
  styleUrls: ['./limit-fields.component.css']
})
export class LimitFieldsComponent implements OnInit {
  isError;
  message;
  tours = [];
  result;

  resultLimit;
  toursLimit = []

  constructor(private service: ToursService) {}

  ngOnInit() {
    this.service.getAll({}).subscribe(
      result => {
        this.isError = false;
        this.result = result;
        this.tours = this.result.data.tours;
        console.log(this.tours);
      },
      error => {
        this.isError = true;
        this.message = 'Wrong query';
      }
    );
  }
  limit() {
    const fields = (<HTMLInputElement>document.getElementById('fields')).value;
    const query: any = { fields: fields };

    this.service.getAll(query).subscribe(
      result => {
        this.isError = false;
        this.resultLimit = result;
        this.toursLimit = this.resultLimit.data.tours;
        console.log('limit', this.toursLimit);
      },
      error => {
        this.isError = true;
        this.message = 'Wrong query';
      }
    );
  }
}

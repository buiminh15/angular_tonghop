import { Component, OnInit } from '@angular/core';
import { ToursService } from 'src/app/shared/tours.service';

@Component({
  selector: 'app-alias',
  templateUrl: './alias.component.html',
  styleUrls: ['./alias.component.css']
})
export class AliasComponent implements OnInit {
  isError;
  message;
  tours = [];
  result;

  constructor(private service: ToursService) {}

  ngOnInit() {
    const alias = 'top-5-cheap';
    this.service.getAllAlias(alias).subscribe(
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

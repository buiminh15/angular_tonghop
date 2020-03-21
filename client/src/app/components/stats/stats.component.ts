import { ToursService } from './../../shared/tours.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  isError;
  message;
  tours = [];
  result;
  constructor(private service: ToursService) {}

  ngOnInit() {
    this.service.getStats().subscribe(
      result => {
        this.isError = false;
        this.result = result;
        this.tours = this.result.data.stats;
        console.log(result);
      },
      error => {
        this.isError = true;
        this.message = 'Wrong query';
      }
    );

  }
}

import { Component, OnInit } from '@angular/core';
import { ToursService } from 'src/app/shared/tours.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  tours = []
  result
  constructor(private service: ToursService, ) { }

  ngOnInit() {
  }
  search() {
    let duration = (<HTMLInputElement>document.getElementById("duration")).value;
    let query = {duration: duration}
    if (duration) {
      this.service.getAll(query).subscribe(result => {
        this.result = result
        this.tours = this.result.data.tours
      })
    }

  }
}

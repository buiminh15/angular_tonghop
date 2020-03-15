import { ToursService } from "./../../shared/tours.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-new-tour",
  templateUrl: "./new-tour.component.html",
  styleUrls: ["./new-tour.component.css"]
})
export class NewTourComponent implements OnInit {
  constructor(private service: ToursService, private router: Router) {}

  ngOnInit() {}
  submit() {
    let name = (<HTMLInputElement>document.getElementById("name")).value;
    let price = (<HTMLInputElement>document.getElementById("price")).value;
    let description = (<HTMLInputElement>document.getElementById("description"))
      .value;
    let newTour = {
      name: name,
      price: price,
      description: description
    };
    this.service.create(newTour).subscribe(
      newTour => {
        alert("Complete");
      },
      err => {
        alert(err.error.message);
      }
    );
  }
  cancel() {
    this.router.navigate(["/"]);
  }
}

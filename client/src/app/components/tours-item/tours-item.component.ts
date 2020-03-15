import { ToursService } from "./../../shared/tours.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-tours-item",
  templateUrl: "./tours-item.component.html",
  styleUrls: ["./tours-item.component.css"]
})
export class ToursItemComponent implements OnInit {
  isError;
  message;
  data;
  tour = {};
  constructor(private route: ActivatedRoute, private service: ToursService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = +params.get("id");
      this.service.get(id).subscribe(
        data => {
          this.data = data;
          if (this.data.status === "success") {
            this.tour = this.data.data.tour;
            this.isError = false;
          }
        },
        err => {
          if (err) {
            this.isError = true;
            this.message = err.error.message;
          }
        }
      );
    });
  }
}

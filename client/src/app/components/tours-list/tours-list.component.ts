import { ToursService } from "./../../shared/tours.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tours-list",
  templateUrl: "./tours-list.component.html",
  styleUrls: ["./tours-list.component.css"]
})
export class ToursListComponent implements OnInit {
  data;
  tours = [];
  constructor(private service: ToursService) {}

  ngOnInit() {
    this.service.getAll().subscribe(data => {
      this.data = data;
      if (this.data.status === "success") {
        this.tours = this.data.data.tours;
        console.log(this.tours);
      }
    });
  }

  delete(id) {
    this.service.delete(id).subscribe(()=> {
      alert('Delete Successfully')
      location.reload();
    })
  }
}

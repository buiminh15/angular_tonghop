import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private url: string, private http: HttpClient) {}

  getAll() {
    return this.http.get(this.url);
  }

  get(id) {
    return this.http.get(this.url + "/" + id);
  }

  create(resource) {
    return this.http.post(this.url, resource);
  }
}

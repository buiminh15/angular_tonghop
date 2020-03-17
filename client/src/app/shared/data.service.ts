import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private url: string, private http: HttpClient) {}


  getAll(queryParams) {
    return this.http.get(this.url, { params: queryParams });
  }

  // getAll(queryParams) {
  //   return this.http.get(this.url, { params: queryParams });
  // }

  get(id) {
    return this.http.get(this.url + '/' + id);
  }

  create(resource) {
    return this.http.post(this.url, resource);
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, resource);
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id);
  }

  getQuery(num) {
    return this.http.get(this.url + '?duration[gte]=' + num);
  }
}

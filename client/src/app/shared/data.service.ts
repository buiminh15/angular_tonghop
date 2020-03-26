import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private url: string, private http: HttpClient) {}

  signup(newUser) {
    return this.http.post(this.url + '/signup', newUser);
  }
  login(user) {
    return this.http.post(this.url + '/login', user);
  }

  getAllAlias(alias) {
    return this.http.get(this.url + '/' + alias);
  }

  getAll(queryParams) {
    return this.http.get(this.url, { params: queryParams });
  }

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

  getStats() {
    return this.http.get(this.url + '/tour-stats');
  }

}

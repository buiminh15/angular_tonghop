import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { convertToJSON } from './utils';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private url: string, private http: HttpClient,) {}

  // USER SERVICE
  signup(newUser) {
    return this.http.post(this.url + '/signup', newUser);
  }
  login(user) {
    return this.http.post(this.url + '/login', user).pipe(
      map(res => {
        const result = convertToJSON(res);
        if (result && result.token) {
          localStorage.setItem('tokenNatours', result.token);
          return true;
        }
        return false;
      })
    );
  }

  logout() {
    localStorage.removeItem('tokenNatours');
  }

  isLoggedIn() {
    // const token = localStorage.getItem('tokenNatours')
    // return this.jwtHelper.isTokenExpired(token);
    const helper = new JwtHelperService();
    const token = localStorage.getItem('tokenNatours')
    if (!token) {
      return false;
    }

    const expirationDate = helper.getTokenExpirationDate(token)
    const isExpired = helper.isTokenExpired(token)

    console.log('Expiration ', expirationDate)
    console.log('isExpired ', isExpired)
    return !isExpired;
  }

  // TOUR SERVICE
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

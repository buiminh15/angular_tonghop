import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { without, findIndex } from 'lodash';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Wisdom Pet Medicine';
  theList: object[];
  modifiedList: object[];
  orderBy: string;
  orderType: string;

  constructor(private http: HttpClient) {
    this.orderBy = 'petName';
    this.orderType = 'asc';
  }

  ngOnInit(): void {
    this.http.get('../../assets/data.json').subscribe((data: object[]) => {
      this.theList = data;
      this.modifiedList = data;
      this.sortItems();
    })
  }

  addApt(theApt: object) {
    this.theList.unshift(theApt);
    this.modifiedList.unshift(theApt);
  }

  searchApt(theQuery: string) {
    this.modifiedList = this.theList.filter(eachItem => {
      return (
        eachItem['petName'].
        toLowerCase().
        includes(theQuery.toLowerCase()) ||
        eachItem['ownerName'].
        toLowerCase().
        includes(theQuery.toLowerCase()) ||
        eachItem['aptNotes'].
        toLowerCase().
        includes(theQuery.toLowerCase())
      );
    })
  }

  deleteApt(theApt: object){
    this.theList = without(this.theList, theApt);
    this.modifiedList = without(this.theList, theApt);
  }

  sortItems() {
    let order: number;
    if (this.orderType === 'asc') {
      order = 1;
    } else {
      order = -1;
    }
    this.modifiedList.sort((a, b) => {
      if (a[this.orderBy].toLowerCase() < b[this.orderBy].toLowerCase()) {
        return -1 * order;
      }
      if (a[this.orderBy].toLowerCase() > b[this.orderBy].toLowerCase()) {
        return 1 * order;
      }
    })
  }
}

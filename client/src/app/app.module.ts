import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ToursListComponent } from "./components/tours-list/tours-list.component";
import { ToursItemComponent } from "./components/tours-item/tours-item.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { NewTourComponent } from "./components/new-tour/new-tour.component";
import { SearchComponent } from './components/search/search.component';
import { SortComponent } from './components/sort/sort.component';
import { LimitFieldsComponent } from './components/limit-fields/limit-fields.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { AliasComponent } from './components/alias/alias.component';
import { StatsComponent } from './components/stats/stats.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ToursListComponent,
    ToursItemComponent,
    PageNotFoundComponent,
    NewTourComponent,
    SearchComponent,
    SortComponent,
    LimitFieldsComponent,
    PaginationComponent,
    AliasComponent,
    StatsComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,

  ],
  imports: [BrowserModule, FormsModule , AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

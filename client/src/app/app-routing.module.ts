import { StatsComponent } from './components/stats/stats.component';
import { NewTourComponent } from './components/new-tour/new-tour.component';
import { ToursItemComponent } from './components/tours-item/tours-item.component';
import { ToursListComponent } from './components/tours-list/tours-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { SortComponent } from './components/sort/sort.component';
import { LimitFieldsComponent } from './components/limit-fields/limit-fields.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { AliasComponent } from './components/alias/alias.component';


const routes: Routes = [
  { path: '', component: ToursListComponent },
  { path: 'tour-stats', component: StatsComponent },
  { path: 'top-5-cheap', component: AliasComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'limit', component: LimitFieldsComponent },
  { path: 'sort', component: SortComponent },
  { path: 'search', component: SearchComponent },
  { path: 'tours/new', component: NewTourComponent },
  { path: 'tours', pathMatch: 'full', redirectTo: '' },
  { path: 'tours/:id', component: ToursItemComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NewTourComponent } from './components/new-tour/new-tour.component';
import { ToursItemComponent } from './components/tours-item/tours-item.component';
import { ToursListComponent } from './components/tours-list/tours-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { SortComponent } from './components/sort/sort.component';
import { LimitFieldsComponent } from './components/limit-fields/limit-fields.component';

const routes: Routes = [
  { path: '', component: ToursListComponent },
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

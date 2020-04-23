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
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './shared/auth-guard.service';
import { AdminAuthGuard } from './shared/admin-auth-guard.service';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'no-access', component: PageNotFoundComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tours', component: ToursListComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: 'tour-stats', component: StatsComponent },
  { path: 'top-5-cheap', component: AliasComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'limit', component: LimitFieldsComponent },
  { path: 'sort', component: SortComponent, canActivate: [AuthGuard, AdminAuthGuard]  },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard, AdminAuthGuard]  },
  { path: 'tours/new', component: NewTourComponent },
  // { path: 'tours', pathMatch: 'full', redirectTo: '' },
  { path: 'tours/:id', component: ToursItemComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

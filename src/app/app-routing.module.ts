import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountriesListComponent } from './countries-list/countries-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CountryDetailsComponent } from './country-details/country-details.component';

const routes: Routes = [
  { path: '',
    component: CountriesListComponent
  },
  {
    path: 'country/:countryName',
    component: CountryDetailsComponent
  },
  { path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

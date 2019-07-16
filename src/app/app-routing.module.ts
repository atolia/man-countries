import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { CountriesPageComponent } from './countries-page/countries-page.component';

const routes: Routes = [
  { path: '',
    component: CountriesPageComponent
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

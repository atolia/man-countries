import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CountryDetailsComponent } from './country-details/country-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesListComponent,
    PageNotFoundComponent,
    CountryDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

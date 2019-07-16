import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { SearchByNamePipe } from './pipes/search-by-name/search-by-name.pipe';
import { CountriesPageComponent } from './countries-page/countries-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesListComponent,
    PageNotFoundComponent,
    CountryDetailsComponent,
    SearchFieldComponent,
    SearchByNamePipe,
    CountriesPageComponent
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { CountriesPageComponent } from './countries-page/countries-page.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    CountriesListComponent,
    PageNotFoundComponent,
    CountryDetailsComponent,
    SearchFieldComponent,
    CountriesPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

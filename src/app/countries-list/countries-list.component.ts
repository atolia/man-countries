import { Component, OnInit } from '@angular/core';

import { CountriesListService } from '../services/api/countries-list.service';
import { Country } from '../../models';

@Component({
  selector: 'man-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {

  countries: Country[];

  constructor(private countriesListService: CountriesListService) { }

  ngOnInit() {
  }

  getCountriesList() {
    this.countriesListService.getAllCountries()
      .subscribe((countries: Country[]) => this.countries = countries);
  }

}

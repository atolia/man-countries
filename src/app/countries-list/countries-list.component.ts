import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CountriesListService } from '../services/api/countries-list/countries-list.service';
import { Country } from '../../models';

@Component({
  selector: 'man-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {

  countries$: Observable<Country[]>;

  constructor(private countriesListService: CountriesListService) { }

  ngOnInit() {
    this.countries$ = this.getCountriesList();
  }

  getCountriesList() {
    return this.countriesListService.getAllCountries();
  }

}

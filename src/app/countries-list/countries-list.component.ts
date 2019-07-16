import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CountriesListService } from '../services/api/countries-list/countries-list.service';
import { SearchService } from '../services/search/search.service';
import { Country, Sorting } from '../../models';

@Component({
  selector: 'man-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {

  countries$: Observable<Country[]>;
  sortPopulationOrder: Sorting;
  sortNamesOrder: Sorting;

  constructor(private countriesListService: CountriesListService, public searchService: SearchService) { }

  ngOnInit() {
    this.countries$ = this.getCountriesList();
  }

  sortPopulation() {
    this.sortPopulationOrder = this.sortPopulationOrder === 'asc' ? 'desc' : 'asc';
  }

  sortNames() {
    this.sortNamesOrder = this.sortNamesOrder === 'asc' ? 'desc' : 'asc';
  }

  private getCountriesList() {
    return this.countriesListService.getAllCountries();
  }

}

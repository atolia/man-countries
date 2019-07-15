import { Component, OnInit } from '@angular/core';

import { CountriesListService } from '../services/api/countries-list.service';

@Component({
  selector: 'man-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {

  constructor(private countriesListService: CountriesListService) { }

  ngOnInit() {
  }

  getCountriesList() {
    this.countriesListService.getAllCountries().subscribe((data: any) => console.log(data));
  }

}

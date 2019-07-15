import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { CountryDetailsService } from '../services/api/country-details/country-details.service';
import { Country } from '../../models';

@Component({
  selector: 'man-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  countryDetails$: Observable<Country>;

  constructor( private route: ActivatedRoute,
               private countryDetailsService: CountryDetailsService,
               private location: Location ) { }

  ngOnInit() {
    this.countryDetails$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.countryDetailsService.getCountryDetails(params.get('countryName'))
      ),
      map((details: Country[]) => details[0])
    );
  }

  goBack() {
    this.location.back();
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { CountryDetailsService } from '../services/api/country-details/country-details.service';

@Component({
  selector: 'man-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  countryDetails$: any;

  constructor( private route: ActivatedRoute, private countryDetailsService: CountryDetailsService ) { }

  ngOnInit() {
    this.countryDetails$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.countryDetailsService.getCountryDetails(params.get('countryName')))
    );

    this.countryDetails$.subscribe((details: any) => console.log(details));
  }

}

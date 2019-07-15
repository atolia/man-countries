import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'man-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  countryDetails$: any;

  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
    this.countryDetails$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => of(params.get('countryName')))
        // this.service.getCountryDetails(params.get('countryName')))
    )

    this.countryDetails$.subscribe((details: any) => console.log(details));
  }

}

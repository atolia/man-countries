import {Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { CountryDetailsService } from '../services/api/country-details/country-details.service';
import { Country } from '../../models';
import { } from 'googlemaps';

@Component({
  selector: 'man-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  countryDetails$: Observable<Country>;
  @ViewChild('mapElement', {static: false}) mapElement: ElementRef;
  map: google.maps.Map;

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

    this.countryDetails$.subscribe((details: any) => {
      console.log(details);
      const [lat, lng] = details.latlng;

      this.initMap(lat, lng);
    });
  }

  goBack() {
    this.location.back();
  }

  private initMap(lat, lng) {
    console.log(lat, lng);
    const mapProperties = {
      center: new google.maps.LatLng(lat, lng),
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
  }

}

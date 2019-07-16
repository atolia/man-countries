import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';

import { environment } from '../../../../environments/environment';
import { Country } from '../../../../models';

@Injectable({
  providedIn: 'root'
})
export class CountriesListService {

  countries: Country[];

  constructor(private http: HttpClient) { }

  /**
   * Get the list of countries
   * @returns {Observable<Country[]>}
   */
  getAllCountries(): Observable<Country[]> {
    return this.countries ? of(this.countries) : this.http.get<Country[]>(`${environment.baseUrl}/all`).pipe(
      tap((countries: Country[]) => this.countries = countries)
    );
  }
}

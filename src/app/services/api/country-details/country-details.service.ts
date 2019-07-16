import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Country } from '../../../../models';

@Injectable({
  providedIn: 'root'
})
export class CountryDetailsService {

  constructor(private http: HttpClient) { }

  /**
   * Get specific country details
   * @param {string} countryName
   * @returns {Observable<Country[]>}
   */
  getCountryDetails(countryName: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${environment.baseUrl}/name/${countryName}`);
  }
}

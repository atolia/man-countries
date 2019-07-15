import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Country } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class CountriesListService {

  constructor(private http: HttpClient) { }

  /**
   * Get the list of all countries
   * @returns {Observable<Country[]>}
   */
  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${environment.baseUrl}/all`);
  }
}

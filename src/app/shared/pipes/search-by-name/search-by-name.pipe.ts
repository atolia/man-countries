import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../../../../models';

@Pipe({
  name: 'searchByName'
})
export class SearchByNamePipe implements PipeTransform {

  transform(countries: Country[], searchTerm: string): Country[] {
    return searchTerm ?
      countries.filter((country: Country) => country.name.toLowerCase().includes(searchTerm.toLowerCase())) :
      countries;
  }

}

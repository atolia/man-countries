import { Pipe, PipeTransform } from '@angular/core';
import { Sorting, Country } from '../../../../models';

@Pipe({
  name: 'sortByPopulation'
})
export class SortByPopulationPipe implements PipeTransform {

  transform(countries: Country[], sortingStrategy: Sorting): Country[] {
    if (sortingStrategy === 'asc') {
      return countries.sort((a, b) => a.population - b.population);
    }

    if (sortingStrategy === 'desc') {
      return countries.sort((a, b) => b.population - a.population);
    }

    console.log('all');
    return countries;
  }
}

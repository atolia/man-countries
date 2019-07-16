import { Pipe, PipeTransform } from '@angular/core';
import { Sorting, Country } from '../../../../models';

@Pipe({
  name: 'sortByName'
})
export class SortByNamePipe implements PipeTransform {

  transform(countries: Country[], sortingStrategy: Sorting): Country[] {
    if (sortingStrategy === 'asc') {
      return countries.sort(this.sortingAsc);
    }

    if (sortingStrategy === 'desc') {
      return countries.sort(this.sortingDesc);
    }

    return countries;
  }

  private sortingAsc(a, b) {
    if (a.name < b.name) { return -1; }
    if (a.name > b.name) { return 1; }
    return 0;
  }

  private sortingDesc(a, b) {
    if (a.name < b.name) { return 1; }
    if (a.name > b.name) { return -1; }
    return 0;
  }

}

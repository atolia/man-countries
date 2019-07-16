import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchByNamePipe } from './pipes/search-by-name/search-by-name.pipe';
import { SortByPopulationPipe } from './pipes/sortByPopulation/sort-by-population.pipe';

@NgModule({
  declarations: [ SearchByNamePipe, SortByPopulationPipe ],
  imports: [
    CommonModule
  ],
  exports: [ SearchByNamePipe, SortByPopulationPipe ]
})
export class SharedModule { }

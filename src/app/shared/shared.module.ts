import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchByNamePipe } from './pipes/search-by-name/search-by-name.pipe';
import { SortByPopulationPipe } from './pipes/sortByPopulation/sort-by-population.pipe';
import { SortByNamePipe } from './pipes/sortByName/sort-by-name.pipe';

@NgModule({
  declarations: [ SearchByNamePipe, SortByPopulationPipe, SortByNamePipe ],
  imports: [
    CommonModule
  ],
  exports: [ SearchByNamePipe, SortByPopulationPipe, SortByNamePipe ]
})
export class SharedModule { }

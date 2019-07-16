import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchByNamePipe } from './pipes/search-by-name/search-by-name.pipe';
import { SortByPopulationPipe } from './pipes/sortByPopulation/sort-by-population.pipe';
import { SortByNamePipe } from './pipes/sortByName/sort-by-name.pipe';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [ SearchByNamePipe, SortByPopulationPipe, SortByNamePipe, ContactFormComponent ],
  imports: [
    CommonModule
  ],
  exports: [ SearchByNamePipe, SortByPopulationPipe, SortByNamePipe, ContactFormComponent ]
})
export class SharedModule { }

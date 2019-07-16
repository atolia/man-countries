import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchByNamePipe } from './pipes/search-by-name/search-by-name.pipe';

@NgModule({
  declarations: [ SearchByNamePipe ],
  imports: [
    CommonModule
  ],
  exports: [ SearchByNamePipe ]
})
export class SharedModule { }

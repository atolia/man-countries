import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CountriesPageComponent } from './countries-page.component';
import { CountriesListComponent } from '../countries-list/countries-list.component';
import { SearchFieldComponent } from '../search-field/search-field.component';
import { SharedModule } from '../shared/shared.module';

describe('CountriesPageComponent', () => {
  let component: CountriesPageComponent;
  let fixture: ComponentFixture<CountriesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesPageComponent, CountriesListComponent, SearchFieldComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule, SharedModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

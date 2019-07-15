import { Currency } from './currency.model';
import { Language } from './language.model';
import { RegionalBlock } from './regional-block.model';

export interface CountryInfo {
  alpha2Code: string;
  alpha3Code: string;
  altSpellings: string[];
  area: number;
  borders: string[];
  callingCodes: string[];
  capital: string;
  cioc: string;
  currencies: Currency[];
  demonym: string;
  flag: string;
  gini: number;
  languages: Language[];
  latlng: number[];
  name: string;
  nativeName: string;
  numericCode: string;
  population: number;
  region: string;
  regionalBlocs: RegionalBlock[];
  subregion: string;
  timezones: string[];
  topLevelDomain: string[];
  translations: any;
}



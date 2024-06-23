import { Country } from './country';
import { Region } from './region.type';

export interface CacheStore {
  byCapital: TermCountries;
  byCountries: NameCountries;
  byRegion: RegionCountries;
}
export interface NameCountries {
  name: string;
  countries: Country[];
}
export interface TermCountries {
  term: string;
  countries: Country[];
}
export interface RegionCountries {
  region: Region;
  countries: Country[];
}

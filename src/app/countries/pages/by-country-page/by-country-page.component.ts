import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``,
})
export class ByCountryPageComponent {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  constructor(private countriesService: CountriesService) {}

  searchByCountry(name: string): void {
    this.isLoading = true;
    this.countriesService.searchCountry(name).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}

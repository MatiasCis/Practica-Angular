import type { Country } from "../interfaces/country.interface";
import type { RESTCountry } from "../interfaces/rest-countries,interfaces";


export class CountryMapper {

  static mapRestCountryToCountry( restCountry: RESTCountry): Country{
    return{
      capital: restCountry.capital.join(','),
      cca2: restCountry.cca2,
      flag: restCountry.flag,
      flagSvg: restCountry.flags.svg,
      name: restCountry.name.common,
      population: restCountry.population
    };
  }

  static mapRestCountryArrayToCountryArray(
  restCountries: RESTCountry[]
): Country[] {
  return restCountries.map((country) => this.mapRestCountryToCountry(country));
}

}

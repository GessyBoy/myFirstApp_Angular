/* quest 10

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  getCocktails() {
    return [
      {
        name: 'Mojito',
        price: 8,
        Image: 'mojito.jpg'
      },
      {
        name: 'Cosmopolitan',
        price: 10,
        Image: 'cosmopolitan.jpg'
      },
      {
        name: 'Piña Colada',
        price: 9,
        Image: 'pina-colada.jpg'
      }
    ];
  }
}
*/

/* quest 11 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cocktail } from './cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  private cocktailsUrl = 'assets/cocktails.json';

  constructor(private http: HttpClient) { }

  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>(this.cocktailsUrl);
  }
}

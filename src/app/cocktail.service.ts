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

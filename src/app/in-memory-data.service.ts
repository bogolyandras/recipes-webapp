import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {InMemoryDbService} from "angular-in-memory-web-api/interfaces";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    return {"recipes": [
        { id: 11, name: 'Tomato soup' },
        { id: 12, name: 'Pizza' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
      ]};
  }

  genId(recipes: Recipe[]): number {
    return recipes.length > 0 ? Math.max(...recipes.map(recipe => recipe.id)) + 1 : 1;
  }

}

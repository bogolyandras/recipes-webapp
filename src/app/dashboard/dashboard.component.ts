import { Component, OnInit } from '@angular/core';
import {RecipeService} from "../recipe.service";
import {Recipe} from "../recipe";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.sass' ]
})
export class DashboardComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeService.getRecipes()
      .subscribe(recipes => this.recipes = recipes.slice(0, 4));
  }
}

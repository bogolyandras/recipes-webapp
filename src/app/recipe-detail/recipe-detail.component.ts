import {Component, Input, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {Recipe} from "../recipe";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.sass']
})
export class RecipeDetailComponent implements OnInit {

  @Input()
  recipe?: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getRecipe();
  }

  getRecipe(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipeService.getRecipe(id)
      .subscribe(recipe => this.recipe = recipe);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.recipe) {
      this.recipeService.updateRecipe(this.recipe)
        .subscribe(() => this.goBack());
    }
  }

}

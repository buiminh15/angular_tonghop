import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simple test', 'https://rasamalaysia.com/wp-content/uploads/2019/01/baked-chicken-breasts2.jpg'),
    new Recipe('Another Test Recipe', 'This is a simple test', 'https://rasamalaysia.com/wp-content/uploads/2019/01/baked-chicken-breasts2.jpg')
  ]
  constructor() { }

  getRecipes() {
    return this.recipes.slice()
  }
}

import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schitzel',
      'A super-tasty Schitzal - just awesome!',
      'https://rasamalaysia.com/wp-content/uploads/2019/01/baked-chicken-breasts2.jpg',
      [
        new Ingredient('Meat',1),
        new Ingredient('French Fries', 20)
      ]
      ),
      new Recipe(
        'Big Fat Burger',
        'What else need to say?',
        'https://rasamalaysia.com/wp-content/uploads/2019/01/baked-chicken-breasts2.jpg',
        [
          new Ingredient('Buns',2),
          new Ingredient('Meat', 1)
        ]
        ),
  ]
  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice()
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients)
  }
}

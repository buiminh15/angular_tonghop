import { Injectable,  } from '@angular/core';


import { Recipe } from './recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>()

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Tasty Schitzel',
  //     'A super-tasty Schitzal - just awesome!',
  //     'https://rasamalaysia.com/wp-content/uploads/2019/01/baked-chicken-breasts2.jpg',
  //     [
  //       new Ingredient('Meat',1),
  //       new Ingredient('French Fries', 20)
  //     ]
  //     ),
  //     new Recipe(
  //       'Big Fat Burger',
  //       'What else need to say?',
  //       'https://rasamalaysia.com/wp-content/uploads/2019/01/baked-chicken-breasts2.jpg',
  //       [
  //         new Ingredient('Buns',2),
  //         new Ingredient('Meat', 1)
  //       ]
  //       ),
  // ]

  private recipes: Recipe[] = []

  constructor(private slService: ShoppingListService) { }

  setRecipes(recipes: Recipe[]) {
    this.recipes=recipes
    this.recipesChanged.next(this.recipes.slice())
  }

  getRecipe(index: number) {
    return this.recipes[index]
  }

  getRecipes() {
    return this.recipes.slice()
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients)
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe)
    this.recipesChanged.next(this.recipes.slice())
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe
    this.recipesChanged.next(this.recipes.slice())
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index,1)
    this.recipesChanged.next(this.recipes.slice())
  }
}

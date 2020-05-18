import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipes/recipe-list/recipe.model';
import { RecipeService } from '../recipes/recipe-list/recipe.service';
import {map, tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient,
            private recipeService: RecipeService) { }

  storeRecipes() {
    const recipes=this.recipeService.getRecipes()
    return this.http.put('https://ng-template-guide-588cd.firebaseio.com/recipes.json', recipes).subscribe(
      response=> {
        console.log(response)
      }
    )
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>('https://ng-template-guide-588cd.firebaseio.com/recipes.json')
    .pipe(map(recipes=> {
      return recipes.map(recipe=> {
        return {
          ...recipe,
          ingredients: recipe.ingredients? recipe.ingredients: []
        }
      })
    }),
    tap(recipes=> {
      this.recipeService.setRecipes(recipes)
    })
    )

  }
}

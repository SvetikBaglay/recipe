import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { IRecipe, IRecipes, RecipeService } from '../recipe.service';


@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.css']
})
export class SearchRecipeComponent implements OnInit {
  searchText: string = '';
  recipes: IRecipes[] = [];

  constructor(
    private recipeServise: RecipeService,
  ) { }


  onSubmit(form: NgForm) {
    this.recipeServise.search(this.searchText).subscribe({
      next: (resp: IRecipe) => {
        this.recipes = resp.hits
    },
      error: console.log
    })
  }

  ngOnInit(): void {
  }

}


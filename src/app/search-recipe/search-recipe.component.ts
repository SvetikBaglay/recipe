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


  handleSearch(page: number): void {
    this.recipeServise.search(this.searchText).subscribe({
      next: (resp: IRecipe) => {
        this.recipes = resp.hits;
      },
      error: console.log
    });
  }



  onSubmit(form: NgForm) {
    console.log(form.value);
  }

  ngOnInit(): void {
  }

}


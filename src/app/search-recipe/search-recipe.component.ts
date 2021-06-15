import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.css']
})
export class SearchRecipeComponent implements OnInit {
  searchText: string = '';

  constructor(
    private recipeServise: RecipeService,
  ) { }


  onSubmit(form: NgForm) {

    console.log(form.value);
  }

  ngOnInit(): void {
  }

}


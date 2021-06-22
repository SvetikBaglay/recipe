import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-recipe-image',
  templateUrl: './recipe-image.component.html',
  styleUrls: ['./recipe-image.component.css']
})
export class RecipeImageComponent implements OnInit {

  @Input() recipeImage: string;
  @Input() recipeLabel: string;
  searchText: string = '';

  constructor(
    private recipeServise: RecipeService
  ) { }


  ngOnInit(): void {
    this.recipeImage
    console.log('recepeImage: ', this.recipeImage)
  }

}

import { Component, OnInit } from '@angular/core';
import { IRecipes, RecipeService } from '../recipe.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-recipe-image',
  templateUrl: './recipe-image.component.html',
  styleUrls: ['./recipe-image.component.css']
})
export class RecipeImageComponent implements OnInit {
  sourse: string;
  sizeImg: IRecipes;

  @Input() recipeImage: string;
  @Input() recipeLabel: string;

  constructor(
    private recipeServise: RecipeService
  ) { }

  getPicture(label: string): void {
    this.recipeServise.search(label).subscribe(
      result => console.log('result: ', result),
      error => console.log('error: ', error),
      )
    }


  ngOnInit(): void {
    this.getPicture(this.recipeImage)
  }

}

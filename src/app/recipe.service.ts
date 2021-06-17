import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


export interface IRecipe {
  from: number,
  to: number,
  count: number
  hits: IRecipes[]
}

  export interface IRecipes{
    recipe: {
      uri: string,
      label: string,
      image: string,
      source: string,
      url: string,
      shareAs: string,
      yield: number,
      dietLabels: [
        string
      ],
      healthLabels: [
        string
      ],
      cautions: [
        string
      ]
      ingredientLines: [
        string
      ],
      ingredients: [
        {
          text: string,
          quantity: number,
          measure: string,
          food: string,
          weight: number,
          foodId: string
        }
      ],
      calories: number,
      totalWeight: number,
      cuisineType: [
        string
      ],
      mealType: [
        string
      ],
      dishType: [
        string
      ],
      totalNutrients: {},
      totalDaily: {},
      digest: [
        {
          label: string,
          tag: string,
          schemaOrgTag: string,
          total: number,
          hasRDI: true,
          daily: number,
          unit: string,
          sub: {}
        }
      ]
    },
    _links: {
      self: {
        href: string,
        title: string
      },
      next: {
        href: string,
        title: string
      }
    }
  }

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiKey = "c28fd7ec26d59b6d4ee7427db88724de";
  private apiID = "f588cd8d";
  private typeRecipe = 'public'
  private url = "https://api.edamam.com/api/recipes/v2";
  private saveRecipe = [];

  constructor(private httpClient: HttpClient) { }

  search(text: string): Observable<IRecipe> {
    return this.httpClient.get<IRecipe>(this.url, { params: { q: text, app_id: this.apiID, app_key: this.apiKey, type: this.typeRecipe } });
  }

}

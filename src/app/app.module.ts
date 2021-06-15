import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchRecipeComponent } from './search-recipe/search-recipe.component';
import { RecipeImageComponent } from './recipe-image/recipe-image.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SearchRecipeComponent,
    RecipeImageComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: SearchRecipeComponent },
      { path: 'recipes', component: RecipesComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

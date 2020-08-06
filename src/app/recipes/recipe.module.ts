import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';



@NgModule({
  declarations: [
    RecipeListComponent, 
    RecipeItemComponent, 
    RecipeDetailComponent
  ],
  exports: [
    RecipeListComponent, 
    RecipeItemComponent, 
    RecipeDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RecipesModule { }

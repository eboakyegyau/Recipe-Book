import { Ingredient } from './../ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient [] = [
    new Ingredient('Tomatoes', 10),
    new Ingredient ('Apples', 5)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

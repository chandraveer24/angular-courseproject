import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
ingredients: Ingredient[] = [
  new Ingredient('Apple', 5),
  new Ingredient('Tomatoes', 10)
];
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {PizzaInfo } from '../../Shared/Models/pizzaInfo.model';
import {Pizza } from '../../Shared/Models/pizza.model';


@Component({
  selector: 'app-pizza-list-component',
  templateUrl: './pizza-list-component.component.html',
  styleUrls: ['./pizza-list-component.component.css']
})
export class PizzaListComponentComponent {
  public arr:Array<Pizza>=(new PizzaInfo).getPizzas();
  constructor() { }



}

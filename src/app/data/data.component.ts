import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { DataService } from '../data/data.service';
import { Subscription } from 'rxjs';
//import { Ingredient } from '../ingredient.model'

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit, OnDestroy {

  ingredients:Ingredient[];
  private subscription: Subscription;
  //=[
    //new Ingredient('Apples',23),
    //new Ingredient('tomato',10),
  //];
  constructor(private slsService:DataService) { }

  ngOnInit() {
  this.ingredients=this.slsService.getIngredients();
  this.subscription=this.slsService.IngredientChange
  .subscribe(
    (Ingredient:Ingredient[])=>{
      this.ingredients=Ingredient;
    }
  );
  }
  onEditItem(index: number){
    this.slsService.startedEditing.next(index);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
// onIngredientAdded(ingredients:Ingredient){
//   this.ingredients.push(ingredients);
// }
}

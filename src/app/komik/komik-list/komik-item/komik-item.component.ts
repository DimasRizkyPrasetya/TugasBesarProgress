import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Komik } from '../../komik.model';
import { KomikService } from '../../komik.service';

@Component({
  selector: 'app-komik-item',
  templateUrl: './komik-item.component.html',
  styleUrls: ['./komik-item.component.css']
})
export class KomikItemComponent implements OnInit {

  @Input() komik:Komik;
  @Input() index:number;
  
  //@Output() recipeSelected=new EventEmitter<void>();
  //constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }
//onSelected(){
  //this.recipeSelected.emit();
 // this.recipeService.recipeSelected.emit(this.komik);
//}
}

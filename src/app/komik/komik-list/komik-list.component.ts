import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { Komik } from '../komik.model';
import { KomikService } from '../komik.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-komik-list',
  templateUrl: './komik-list.component.html',
  styleUrls: ['./komik-list.component.css']
})
export class KomikListComponent implements OnInit, OnDestroy {

  //@Output() recipeWasSelected=new EventEmitter<Komik>();
  komiks:Komik[];
  subscription: Subscription;
  //property:class komik
  

  constructor(private komikService:KomikService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.komikService.komiksChanged
    .subscribe(
      (komiks: Komik[]) =>{
        this.komiks = komiks;
      }
    );
    this.komiks= this.komikService.getKomiks();
  }
  onNewKomik(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }
  //onRecipeSelected(komik:Komik){
    //this.recipeWasSelected.emit(komik);
  //}
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}

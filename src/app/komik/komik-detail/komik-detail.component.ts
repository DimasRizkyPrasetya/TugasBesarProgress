import { Component, OnInit, Input } from '@angular/core';
import { Komik } from '../komik.model';
import { KomikService } from '../komik.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-komik-detail',
  templateUrl: './komik-detail.component.html',
  styleUrls: ['./komik-detail.component.css']
})
export class KomikDetailComponent implements OnInit {
//@Input() komik:Komik;
komik:Komik;
id:number;

  constructor(private komikService:KomikService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.komik=this.komikService.getKomik(this.id);
      }
    )
  }
  //membuat method onAddData
  onAddData(){
    this.komikService.addIngredientsData(this.komik.ingredients);
  }
  onEditKomik(){
    this.router.navigate(['edit'], {relativeTo:this.route});
  }

  onDeleteKomik(){
    this.komikService.deleteKomik(this.id);
    this.router.navigate(['/komiks']);
  }

}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Response } from '@angular/http';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
//@Output() featureSelected= new EventEmitter<string>();

//onSelect(feature:string){
  //this.featureSelected.emit(feature);
//}
onSaveData(){
  this.dataStorageService.storeKomiks()
  .subscribe(
    (response: Response) => {
      console.log(response);
    }
  );
  
}

onFetchData(){
  this.dataStorageService.getKomiks();
}

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';
import { Komik } from '../komik/komik.model';
import { Ingredient } from '../shared/ingredient.model';
import { DataService } from '../data/data.service';
import { Subject } from 'rxjs';
@Injectable(

)
export class KomikService {
komiksChanged=new Subject<Komik[]>();


  //property:class komik
  private komiks:Komik[]=[
    new Komik('Komik Boruto','Boruto Episode 86: Harapan Kozuchi, Cucu Onoki yang Sudah Tiada Di dalam preview tersebut juga menjelaskan bahwa selama ini, Onoki melakukan sesuatu yang diinginkan dan diharapkan oleh cucunya tersebut Masalahnya, keinginan dan harapannya ini yang dimisterikan, dan tidak dijelaskan lebih lanjut Kira-kira apa itu? Perdamaian dunia? Atau kondisi di mana setiap manusia di Bumi bisa hidup dengan tenang dan nyaman? Kita tunggu jawabannya di episode berikutnya Masalah lain yang juga muncul adalah penyerangan Lord Ku ke Iwagakure. Dalam preview Boruto episode 86, kita melihat pasukan batunya sudah mulai menjajah dan masuk ke dalam wilayah desa Iwagakure, sebelum pihak Iwagakure menyadari Kurotsuchi dan justru menyerang balik Lord Ku.'
    ,'../src/app/img/1.png',
    [
      new Ingredient('Halaman',10),
      new Ingredient('Terbit',2010)
    ]),
    new Komik('Komik Naruto Di Era Boruto','Konflik Konoha dan Iwagakure dalam Sejarah! Apakah Terulang Lagi di Era Boruto? Iwagakure di dunia Naruto adalah salah satu desa yang tertutup, suka perang, dan memang suka berkonflik dengan desa lain, termasuk konflik Konoha dan Iwagakure dalam sejarah yang akan kita bahas ini Dari sekian banyak desa, Iwagakure adalah desa yang paling sering bentrok dengan Konoha, bahkan dalam sekala perang yang besar Di era Boruto, sepertinya Lord Ku ingin kembali membawa perang antara dua desa besar itu. Memang sebelum itu, ada konflik Konoha dan Iwagakure '
  ,'../src/app/img/2.jpg',
  [
    new Ingredient('Halaman',9),
    new Ingredient('Terbit',2018)
  ]),
  new Komik('Komik OnePiece','One Piece 928: Waduh! Sanji Bakal Lawan Bawahan Queen?! Setelah akhirnya kita melihat anggota Topi Jerami yang terpencar mulai berkumpul di kios Soba milik Sanji alias Sangoro, ada kemungkinan kita juga akan mulai melihat apa yang dilakukan oleh anggota aliansi Topi Jerami lainnya Mereka berhasil menyusup ke salah satu bangunan milik petinggi Negeri Wano dan menemukan informasi tentang transaksi senjata. Franky, Usopp, Robin, dan Sanji sudah diperlihatkan apa yang mereka sedang lakukan di One Piece 927. Chopper diperlihatkan sedang merawat O-Tama di rumah Tenguyama Hitetsu.'
  ,'../src/app/img/one.png',
  [
    new Ingredient('Halaman',9),
    new Ingredient('Terbit',2018)
  ]),];

  getKomiks(){
    return this.komiks.slice();
  }
  //tambahkan method addIngredientsData dengan parameter ingredient[]
  addIngredientsData(ingredients: Ingredient[]){
    this.slsService.addIngredients(ingredients);
  }
  getKomik(index:number){
    return this.komiks [index] ;
  }
  //tambahkan parameter pada construktor
constructor(private slsService: DataService) {}

setKomiks(komiks: Komik[]){
  this.komiks = komiks;
  this.komiksChanged.next(this.komiks.slice());
}

addKomik(komik: Komik){
this.komiks.push(komik);
this.komiksChanged.next(this.komiks.slice());
}
updateKomik(index: number, newKomik: Komik){
this .komiks[index]= newKomik;
this.komiksChanged.next(this.komiks.slice());
}
deleteKomik(index: number){
  this.komiks.splice(index, 1);
  this.komiksChanged.next(this.komiks.slice());
  }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { KomikService } from '../komik.service';
// import { Recipe } from '../komik.model';


@Component({
  selector: 'app-komik-edit',
  templateUrl: './komik-edit.component.html',
  styleUrls: ['./komik-edit.component.css']
})
export class KomikEditComponent implements OnInit {
  id:number;
  editMode=false;
komikForm: FormGroup;
  constructor( private route:ActivatedRoute,
  private komikService: KomikService ,
  private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.editMode=params['id']!=null;
        this.initForm();

        //untuk mengecek mode dari edit mode
        //jika /new maka nilainya akan false
        //jika /0/edit (idnya/edit) maka nilainya true
        console.log(this.editMode);
      }
    )
    
  }
  onSubmit(){
  //const newRecipe =new Recipe(
    //this.komikForm.value['name'],
    //this.komikForm.value['description'],
    //this.komikForm.value['imagePath'],
    //this.komikForm.value['ingredients']);
  if(this.editMode){
    this.komikService.updateKomik(this.id, this.komikForm.value);
  }else{
    this.komikService.addKomik(this.komikForm.value);
  }
  this.onCancel();
  }
  onAddIngredient(){
    (<FormArray>this.komikForm.get('ingredients')).push(
      new FormGroup({
        'name' : new FormControl(null, Validators.required),
        'amount':new FormControl(null, [
          Validators.required,,
          Validators.pattern(/^[1-9]+[0-9]*$/)
      ])
      })
    );
  }
  onDeleteIngredient(index: number){
    (<FormArray>this.komikForm.get('ingredients')).removeAt(index);
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm(){
    let komikName='';
    let komikImagePath='';
    let komikDescription='';
    let komikIngredients = new FormArray([]);
    if(this.editMode){
      const komik=this.komikService.getKomik(this.id);
      komikName=komik.name;
      komikImagePath=komik.imagePath;
      komikDescription=komik.description;
      if (komik['ingredient']){
        for(let ingredient of komik.ingredient){
          komikIngredients.push(
           new FormGroup({
             'name' : new FormControl(ingredient.name,Validators.required),
             'amount' : new FormControl(ingredient.amount,[Validators.required,,Validators.pattern(/^[1-9]+[0-9]*$/)
           ])
           }) 
          );

        }
      }
        }
this.komikForm =new FormGroup({
  'name': new FormControl(komikName,Validators.required),
  'imagePath':new FormControl(komikImagePath,Validators.required),
  'description':new FormControl(komikDescription,Validators.required),
  'ingredients': komikIngredients
});
  }

}

import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { KomikComponent } from './komik/komik.component';
import { DataComponent } from './data/data.component';
import { KomikStartComponent } from './komik/komik-start/komik-start.component';
import { KomikDetailComponent } from './komik/komik-detail/komik-detail.component';
import { KomikEditComponent } from './komik/komik-edit/komik-edit.component';
import { HomeComponent } from './home/home.component';

const appRoutes:Routes=[
    { path:'',redirectTo:'/home',pathMatch:'full' },
    { path:'home',component:HomeComponent },
    { path:'komiks',component:KomikComponent,children:[
        { path:'',component:KomikStartComponent },
        { path: 'new',component:KomikEditComponent },
        { path: ':id',component:KomikDetailComponent },
        { path:':id/edit',component:KomikEditComponent },
    ]},
    { path:'data',component:DataComponent },
];

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})

export class AppRoutingModule{}
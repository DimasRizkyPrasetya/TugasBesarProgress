import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { KomikComponent } from './komik/komik.component';
import { DataEditComponent } from './data/data-edit/data-edit.component';

import {KomikListComponent} from "./komik/komik-list/komik-list.component";
import {KomikDetailComponent} from "./komik/komik-detail/komik-detail.component";
import { KomikStartComponent } from './komik/komik-start/komik-start.component';
import {KomikItemComponent} from "./komik/komik-list/komik-item/komik-item.component";
import { DataComponent } from './data/data.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { DataService } from './data/data.service';
import { KomikEditComponent } from './komik/komik-edit/komik-edit.component';
import { KomikService } from './komik/komik.service';
import { DataStorageService } from './shared/data-storage.service';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    KomikComponent,
    KomikListComponent,
    KomikDetailComponent,
    KomikItemComponent,
    DataComponent,
    DataEditComponent,
    DropdownDirective,
    KomikStartComponent,
    KomikEditComponent,
    HomeComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DataService, KomikService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

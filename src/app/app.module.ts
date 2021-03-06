import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {GetAPIService} from "./services/get-api.service";
import {HttpModule} from "@angular/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule, MatIconModule} from '@angular/material';
import { FavoriteItemComponent } from './components/favorite-item/favorite-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [GetAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }

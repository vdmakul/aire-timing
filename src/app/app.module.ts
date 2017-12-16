import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AttemptsRepo} from "./common/repos/attempts.repo";
import { AttemptsComponent } from './attempts/attempts.component';
import {MockData} from "./common/repos/mock.data";


@NgModule({
  declarations: [
    AppComponent,
    AttemptsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MockData,
    AttemptsRepo
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AttemptsRepo} from './common/repos/attempts.repo';
import {AttemptsComponent} from './attempts/attempts.component';
import {MockData} from './common/repos/mock.data';
import {MaterialModule} from './material/material.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AttemptsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    MockData,
    AttemptsRepo
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

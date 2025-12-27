import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GetConfirmComponent } from './shared/components/get-confirm/get-confirm.component';
import { MaterialModule } from './shared/material/material/material.module';
import { MovieDashComponent } from './shared/components/movie-dash/movie-dash.component';
import { MovieFormComponent } from './shared/components/movie-form/movie-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MovieCardComponent } from './shared/components/movie-card/movie-card.component';

@NgModule({
  declarations: [
    AppComponent,
    GetConfirmComponent,
    MovieDashComponent,
    MovieFormComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

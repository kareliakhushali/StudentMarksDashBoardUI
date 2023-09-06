import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoreComponent } from './score/score.component';
import { ShowScoreComponent } from './score/show-score/show-score.component';
import { AddEditScoreComponent } from './score/add-edit-score/add-edit-score.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScoreApiService } from './services/score-api.service';
@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    ShowScoreComponent,
    AddEditScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ScoreApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JsonapiComponent } from './jsonapi/jsonapi.component';
import { AddrecordComponent } from './addrecord/addrecord.component';
import { EditrecordComponent } from './editrecord/editrecord.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    JsonapiComponent,
    AddrecordComponent,
    EditrecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

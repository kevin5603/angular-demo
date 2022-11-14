import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForkjoinComponent } from './forkjoin/forkjoin.component';
import { MapFamilyComponent } from './map-family/map-family.component';

@NgModule({
  declarations: [
    AppComponent,
    ForkjoinComponent,
    MapFamilyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

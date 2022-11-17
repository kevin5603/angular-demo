import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ForkjoinComponent} from './forkjoin/forkjoin.component';
import {MapFamilyComponent} from './map-family/map-family.component';
import {DemoComponent} from './demo/demo.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faCoffee} from "@fortawesome/free-solid-svg-icons/faCoffee";
import {faExclamationTriangle} from "@fortawesome/free-solid-svg-icons/faExclamationTriangle";


@NgModule({
  declarations: [
    AppComponent,
    ForkjoinComponent,
    MapFamilyComponent,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faCoffee, faExclamationTriangle)
  }
}

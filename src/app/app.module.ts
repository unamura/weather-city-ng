import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PlaceService } from './services/place.service';
import { PlaceCityComponent } from './components/place-city/place-city.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaceCityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PlaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

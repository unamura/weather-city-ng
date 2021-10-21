import { Component } from '@angular/core';
import { PlaceService, PlaceInterface } from './services/place.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  places: Array<PlaceInterface> = [];

  constructor(service: PlaceService) {
    service.loadKey(['1'])?.subscribe(
      places => this.places = places
    );
  }
}

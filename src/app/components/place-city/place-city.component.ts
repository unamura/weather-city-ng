import { Component, Input } from '@angular/core';

@Component({
  selector: 'place-city',
  templateUrl: './place-city.component.html',
  styleUrls: ['./place-city.component.css']
})
export class PlaceCityComponent {

  @Input() place: any;

  details() {
    console.log('@mm PlaceCityComponent : ' + this.place.placeName);
    return this.place;
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let keys: Array<string> = ['1', '2'];
let service: string = 'http://localhost:8181';

export interface PlaceInterface {
  placeName: string;
  placeDetails: string;
  placeLongitude: number;
  placeLatitude: number;
}

@Injectable()
export class PlaceService {

  constructor(private http: HttpClient) { }

  get() {
    return keys;
  }

  loadKey(key: any[]) {
    if (key) {
      return this.http.get<Array<PlaceInterface>>(
        service + '/geo/map?key=' + key.join()
      );
    }
  }

  load() {
    return this.http.get<Array<PlaceInterface>>(
      service + '/geo/map?key=1');
  }
}
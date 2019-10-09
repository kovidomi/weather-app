import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityReaderService {
  constructor(private httpClient: HttpClient) {}

  public getEuropeanCities() {
    return this.httpClient.get('../../assets/europe_capitals.txt', {responseType: 'text'});
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiUrl: string  = 'http://api.openweathermap.org/data/2.5/weather';
  API_KEY: string = '33e92f887f3c3663797c4f3d30dd1e27';
  city = 'Budapest';

  finalUrl: string = this.apiUrl + '?q=' + this.city + '&appid=' + this.API_KEY;

  public getWeather() {
    return this.httpClient.get(this.finalUrl);
  }

  constructor(private httpClient: HttpClient) { }
}

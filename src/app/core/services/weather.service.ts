import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private baseUrl: string  = 'http://api.openweathermap.org/data/2.5/weather';
  private API_KEY: string = '33e92f887f3c3663797c4f3d30dd1e27';

  public getCityWeather(city: string) {
    return this.httpClient.get(this.baseUrl + '?q=' + city + '&appid=' + this.API_KEY);
  }

  constructor(private httpClient: HttpClient) { }
}

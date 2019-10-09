import { Component, OnInit } from '@angular/core';
import {WeatherApiService} from '../../../core/services/weather-api.service';
import {CityWeather} from '../../../core/models/CityWeather.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentCity: CityWeather;

  constructor(private weatherService: WeatherApiService) {}

  ngOnInit() {
    this.weatherService.selectedCityChanged.subscribe(city => {
      this.weatherService.getCityWeather(city).subscribe((data: CityWeather) => {
        this.currentCity = data;
      });
    });
  }

}

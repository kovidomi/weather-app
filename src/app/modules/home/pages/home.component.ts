import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../../core/services/weather.service';
import {Weather} from '../../../core/models/weather.model';
import {CityReaderService} from '../../../core/services/city-reader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentWeather: Weather;
  europeanCapitals: string[] = [];

  constructor(private weatherService: WeatherService, private cityReader: CityReaderService) {}

  ngOnInit() {
    this.weatherService.getWeather('Budapest').subscribe((data: Weather) => {
      console.log(data);
      this.currentWeather = data;
    });

    this.cityReader.getEuropeanCities().subscribe((data) => {
      this.europeanCapitals = data.split(/[\r\n]+/).sort();
      console.log(this.europeanCapitals);
    });
  }

}

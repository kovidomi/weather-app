import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../../core/services/weather.service';
import {Weather} from '../../../core/models/weather.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentWeather: Weather;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather().subscribe((data: Weather) => {
      console.log(data);
      this.currentWeather = data;
    });
  }

}

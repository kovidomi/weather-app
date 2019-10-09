import { Component, OnInit } from '@angular/core';
import {CityReaderService} from '../../../core/services/city-reader.service';
import {WeatherService} from '../../../core/services/weather.service';

@Component({
  selector: 'app-side-nav-content',
  templateUrl: './side-nav-content.component.html',
  styleUrls: ['./side-nav-content.component.css']
})
export class SideNavContentComponent implements OnInit {

  cities: string[] = [];

  constructor(private cityReader: CityReaderService, private weatherService: WeatherService) { }

  ngOnInit() {
    this.cityReader.getEuropeanCities().subscribe((data) => {
      this.cities = data.split(/[\r\n]+/).sort();
    });
  }

  onCityClick(city: string) {
    this.weatherService.selectedCityChanged.emit(city)
    console.log(city);
  }

}

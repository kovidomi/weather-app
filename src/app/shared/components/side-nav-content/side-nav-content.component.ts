import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CityReaderService} from '../../../core/services/city-reader.service';
import {WeatherApiService} from '../../../core/services/weather-api.service';

@Component({
  selector: 'app-side-nav-content',
  templateUrl: './side-nav-content.component.html',
  styleUrls: ['./side-nav-content.component.css']
})
export class SideNavContentComponent implements OnInit {
  @Output() cityChanged: EventEmitter<void> = new EventEmitter<void>();

  cities: string[] = [];
  searchText: string;

  constructor(private cityReader: CityReaderService, private weatherService: WeatherApiService) { }

  ngOnInit() {
    this.cityReader.getEuropeanCities().subscribe((data) => {
      this.cities = data.split(/[\r\n]+/).sort();
    });
  }

  onCityClick(city: string) {
    this.weatherService.selectedCityChanged.emit(city);
    this.cityChanged.emit();
  }

}

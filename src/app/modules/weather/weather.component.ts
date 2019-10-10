import { Component, OnInit } from '@angular/core';
import { CityWeather } from '../../core/models/CityWeather.model';
import { WeatherApiService } from '../../core/services/weather-api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  private defaultCity: string = 'Budapest';
  cityWeather: CityWeather;

  constructor(private weatherApiService: WeatherApiService) {
    this.getCityWeatherByName(this.defaultCity);

    this.weatherApiService.selectedCityChanged.subscribe(city => {
      this.getCityWeatherByName(city);
    });
  }

  ngOnInit() {
  }

  getTemperature(temperatureInKelvin): string {
    const celsius = temperatureInKelvin - 273.15;
    return this.checkNumberToFormat(celsius.toString().slice(0, 5)) + '°C';
  }

  getWeatherDescription(desc): string {
    if (desc != null) {
      return desc.charAt(0).toUpperCase() + desc.slice(1);
    }
    return '';
  }

  getHumidity(humidity): string {
    return humidity + ' %';
  }

  getCloudiness(cloudiness): string {
    return cloudiness + ' %';
  }

  getPressure(pressure): string {
    return pressure + ' hPa';
  }

  getDateFromTimeStamp(timestamp): string {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = '0' + date.getMinutes();
    const seconds = '0' + date.getSeconds();
    return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  }

  getWindSpeed(wind): string {
    const windInKm = wind * 3.6;
    return this.checkNumberToFormat(windInKm.toString().slice(0, 5)) + ' km/h';
  }

  getWindDirection(direction): string {
    if (direction > 337.5) {
      return 'North';
    }
    if (direction > 292.5) {
      return 'North-West';
    }
    if (direction > 247.5) {
      return 'West';
    }
    if (direction > 202.5) {
      return 'South-West';
    }
    if (direction > 157.5) {
      return 'South';
    }
    if (direction > 122.5) {
      return 'South-East';
    }
    if (direction > 67.5) {
      return 'East';
    }
    if (direction > 22.5) {
      return 'North-East';
    }
    return 'North';
  }

  private checkNumberToFormat(numberToFormat): string {
    if (numberToFormat.endsWith('0')) {
      return numberToFormat.slice(0, 4);
    }
    return numberToFormat;
  }

  private getCityWeatherByName(cityName) {
    this.weatherApiService.getCityWeather(cityName).subscribe((cityWeather: CityWeather) => {
      this.cityWeather = cityWeather;
    });
  }

}

import { Component } from '@angular/core';
import { Weather } from './Weather';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestUI'

  data: Weather[] = []

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.get()
    .subscribe((responseData :Weather[]) =>this.data = responseData);
    

  }


}

import { Injectable } from '@angular/core'
import {HttpClient} from '@angular/common/http'
import { Weather } from './Weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiURL="http://localhost:5005/WeatherForecast"

  constructor(private httpClient: HttpClient) {}

  get(){
      return this.httpClient.get<Weather[]>(this.apiURL)
  }
}

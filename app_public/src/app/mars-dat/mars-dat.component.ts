import { Component, OnInit } from '@angular/core';
import { Weather } from './weather.model';
import { DataService } from '../data.service';
import { MongoService } from '../mongo.service';

@Component({
  selector: 'app-root',
  templateUrl: './mars-dat.component.html',
  styleUrls: ['./mars-dat.component.css']
})

export class MarsDatComponent implements OnInit{
  WeatherResult: Object;

  weather$: Weather[]

  constructor(private dataService: DataService) {}

  ngOnInit() 
  {
    
    this.dataService.getWeather()
    .subscribe(data => {this.weather$ = data
      console.log(this.weather$);
    });
    
    
    
  }
  
}



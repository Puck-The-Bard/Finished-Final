import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Weather } from './mars-dat/weather.model';
import { mongoose } from 'mongoose';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
export class MongoService {

  uri = "mongodb+srv://ZM4382:MongoUsrPass2019*@backendclasscluster-0iora.mongodb.net/test?retryWrites=true&w=majority"

  constructor(private $http: HttpClient) { }

  
   
}

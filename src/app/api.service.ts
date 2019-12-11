import { Injectable } from '@angular/core';
import * as http from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { stringify } from 'querystring';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  halApiURL: string = 'http://192.168.250.169:3000/api/v1/frames/modulo/';
  hapi: string = 'http://192.168.250.169:3000/api/v1/frames/modulo/1/led/';
  constructor(private httpClient: http.HttpClient) {}
  api: string;

  public openDoor(picNumber: string, cassetteNumber: string,   locationNumber: string, positionNumber: string, ip: string){
    console.log("cheama hal api");
    let body = {
      cassette: parseInt(cassetteNumber),
      location:  parseInt(locationNumber),
      position:  parseInt(positionNumber),
      compartments: 1,
      timeout: 0
    };
    let apiURL = "http://" + ip + ":3000/api/v1/frames/modulo/" + picNumber + "/open";
    return this.httpClient.post(apiURL, body,
      {headers: new HttpHeaders({'Content-Type':'application/json'})
      });
  }

  public turnOnOffLed(onOff: string, ip: string)
  {
    let apiURL = "http://" + ip + ":3000/api/v1/frames/modulo/1/led/" + onOff;
    return this.httpClient.put(apiURL,
      {headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'crossDomain': 'true', 'mode': 'cors'})
    });
}
  
}




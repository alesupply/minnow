import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { LocalStorageService } from '../localStorage.service';

@Component({
  selector: 'app-minnow',
  templateUrl: './minnow.page.html',
  styleUrls: ['./minnow.page.scss'],
})
export class MinnowPage implements OnInit {
  picNumber: string;
  cassetteNumber: string;
  locationNumber: string;
  positionNumber: string;
  constructor(private apiService: ApiService, private localStorageService: LocalStorageService)
  {
   }

  ngOnInit() {
    console.log(this.localStorageService.get("ip"));
  }
  sendAdress() {
    console.log(this.picNumber);
    let ip = this.localStorageService.get("ip");
    console.log("Ip din local storage" + ip);
    this.apiService.openDoor(this.picNumber, this.cassetteNumber, this.locationNumber, this.positionNumber, ip).subscribe((res)=>{
      console.log(res);
  });
  }
  turnOn() {
    let ip = this.localStorageService.get("ip");
    this.apiService.turnOnOffLed("on",ip).subscribe((res)=>{
      console.log(res);
  });
  }
  turnOff() {
    console.log(this.picNumber);
    let ip = this.localStorageService.get("ip");
    this.apiService.turnOnOffLed("off", ip).subscribe((res)=>{
      console.log(res);
  });
  }
}

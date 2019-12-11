import { Component, OnInit, NgModule } from '@angular/core';
import { NetworkInterface } from '@ionic-native/network-interface/ngx';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})



export class AboutPage implements OnInit {
   ip1: string;
   ip2: string;
  constructor(private networkInterface: NetworkInterface) { 
  }

  ngOnInit() {
   this.networkInterface.getWiFiIPAddress().then(address => this.ip1 = address.ip);
    this.networkInterface.getCarrierIPAddress().then(address => this.ip2 = address.ip);
  }
}

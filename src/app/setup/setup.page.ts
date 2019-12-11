import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LocalStorageService } from '../localStorage.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.page.html',
  styleUrls: ['./setup.page.scss'],
})
export class SetupPage implements OnInit {
  ip: string;
  public halapiIP: string;
  constructor(private router: Router,  private localStorageService: LocalStorageService) { }

  ngOnInit() {
     this.ip = '192.168.250.169';
  }
setup(){
  console.log("setup");
    this.halapiIP = this.ip;
 
    console.log(this.halapiIP);
    if (this.halapiIP != null) {
      try {
        this.localStorageService.set("ip", this.halapiIP);
        this.router.navigateByUrl('/minnow');
      } catch(error) {
      
        console.error(error.message)
      }
    
    }
}
}

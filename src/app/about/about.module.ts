import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NetworkInterface } from '@ionic-native/network-interface/ngx';
import { IonicModule } from '@ionic/angular';

import { AboutPage } from './about.page';
import { LocalStorageService } from '../localStorage.service';

const routes: Routes = [
  {
    path: '',
    component: AboutPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AboutPage],
  providers: [NetworkInterface, LocalStorageService]
})
export class AboutPageModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Router, RouterModule, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageService } from './localStorage.service';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'minnow', loadChildren: './minnow/minnow.module#MinnowPageModule' },
  { path: 'setup', loadChildren: './setup/setup.module#SetupPageModule' }
];
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [
    StatusBar,
    SplashScreen,
    LocalStorageService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, Router } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SetupPage } from './setup.page';

const routes: Routes = [
  {
    path: '',
    component: SetupPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SetupPage]
})
export class SetupPageModule {}

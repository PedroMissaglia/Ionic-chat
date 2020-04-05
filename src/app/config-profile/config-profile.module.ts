import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigProfilePageRoutingModule } from './config-profile-routing.module';

import { ConfigProfilePage } from './config-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigProfilePageRoutingModule
  ],
  declarations: [ConfigProfilePage]
})
export class ConfigProfilePageModule {}

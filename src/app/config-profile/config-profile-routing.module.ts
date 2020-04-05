import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigProfilePage } from './config-profile.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigProfilePageRoutingModule {}

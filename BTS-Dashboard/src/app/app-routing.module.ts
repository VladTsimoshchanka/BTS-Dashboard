import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { SettingsComponent } from './settings/settings.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: DashComponent },
  { path: 'user', component: UserComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

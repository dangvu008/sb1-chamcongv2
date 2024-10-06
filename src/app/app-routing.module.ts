import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { MainComponent } from './main/main.component'
import { SettingsComponent } from './settings/settings.component'
import { ProfileComponent } from './profile/profile.component'
import { StatisticsComponent } from './statistics/statistics.component'
import { SearchComponent } from './search/search.component'
import { InterfaceSettingsComponent } from './settings/interface-settings/interface-settings.component'
import { ClockingProfileSettingsComponent } from './settings/clocking-profile-settings/clocking-profile-settings.component'
import { ScheduleSettingsComponent } from './settings/schedule-settings/schedule-settings.component'
import { SalaryCalculationComponent } from './settings/salary-calculation/salary-calculation.component'
import { NotificationSettingsComponent } from './settings/notification-settings/notification-settings.component'

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'settings/interface', component: InterfaceSettingsComponent },
  { path: 'settings/clocking-profile', component: ClockingProfileSettingsComponent },
  { path: 'settings/schedule', component: ScheduleSettingsComponent },
  { path: 'settings/salary-calculation', component: SalaryCalculationComponent },
  { path: 'settings/notification', component: NotificationSettingsComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
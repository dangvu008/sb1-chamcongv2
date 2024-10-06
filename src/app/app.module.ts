import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'
import { NativeScriptFormsModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
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

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, NativeScriptFormsModule],
  declarations: [
    AppComponent,
    MainComponent,
    SettingsComponent,
    ProfileComponent,
    StatisticsComponent,
    SearchComponent,
    InterfaceSettingsComponent,
    ClockingProfileSettingsComponent,
    ScheduleSettingsComponent,
    SalaryCalculationComponent,
    NotificationSettingsComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
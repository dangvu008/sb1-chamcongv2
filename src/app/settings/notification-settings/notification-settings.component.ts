import { Component } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular'

@Component({
  selector: 'ns-notification-settings',
  templateUrl: './notification-settings.component.html',
  styleUrls: ['./notification-settings.component.css']
})
export class NotificationSettingsComponent {
  enableNotifications = true
  enableSound = true
  enableVibration = true
  reminderTimes = ['5 minutes', '10 minutes', '15 minutes', '30 minutes', '1 hour']
  selectedReminderTime = '15 minutes'
  selectedClockOutReminderTime = '15 minutes'

  constructor(private routerExtensions: RouterExtensions) {}

  onEnableNotificationsChange(args: any) {
    const sw = args.object
    this.enableNotifications = sw.checked
  }

  onSoundChange(args: any) {
    const sw = args.object
    this.enableSound = sw.checked
  }

  onVibrationChange(args: any) {
    const sw = args.object
    this.enableVibration = sw.checked
  }

  onReminderTimeChange(args: any) {
    const picker = args.object
    this.selectedReminderTime = this.reminderTimes[picker.selectedIndex]
  }

  onClockOutReminderTimeChange(args: any) {
    const picker = args.object
    this.selectedClockOutReminderTime = this.reminderTimes[picker.selectedIndex]
  }

  saveNotificationSettings() {
    // Implement logic to save notification settings
    console.log('Notification settings saved')
  }

  goBack() {
    this.routerExtensions.back()
  }
}
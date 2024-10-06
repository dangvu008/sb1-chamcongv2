import { Component, OnInit } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular'
import { DatePicker } from '@nativescript/core'

@Component({
  selector: 'ns-schedule-settings',
  templateUrl: './schedule-settings.component.html',
  styleUrls: ['./schedule-settings.component.css']
})
export class ScheduleSettingsComponent implements OnInit {
  scheduleTypes = ['Daily', 'Weekly', 'Monthly']
  selectedScheduleType = 'Daily'
  startDate: Date = new Date()
  profiles = ['Default Profile', 'Night Shift', 'Weekend Shift']
  selectedProfile = 'Default Profile'
  isRotatingShift = false
  selectedSecondProfile = ''
  rotationInterval = ''
  daysOffOptions = ['No Days Off', 'Weekends', 'Custom']
  selectedDaysOff = 'Weekends'
  weeksToApply: { label: string; selected: boolean }[] = []

  constructor(private routerExtensions: RouterExtensions) {}

  ngOnInit() {
    this.generateWeeksToApply()
  }

  onScheduleTypeChange(args: any) {
    const picker = args.object
    this.selectedScheduleType = this.scheduleTypes[picker.selectedIndex]
  }

  onDateChange(args: any) {
    const datePicker = args.object as DatePicker
    this.startDate = datePicker.date
    this.generateWeeksToApply()
  }

  onProfileChange(args: any) {
    const picker = args.object
    this.selectedProfile = this.profiles[picker.selectedIndex]
  }

  onRotatingShiftChange(args: any) {
    const sw = args.object
    this.isRotatingShift = sw.checked
  }

  onSecondProfileChange(args: any) {
    const picker = args.object
    this.selectedSecondProfile = this.profiles[picker.selectedIndex]
  }

  onDaysOffChange(args: any) {
    const picker = args.object
    this.selectedDaysOff = this.daysOffOptions[picker.selectedIndex]
  }

  generateWeeksToApply() {
    this.weeksToApply = []
    let currentDate = new Date(this.startDate)
    for (let i = 0; i < 4; i++) {
      const weekStart = new Date(currentDate)
      const weekEnd = new Date(currentDate)
      weekEnd.setDate(weekEnd.getDate() + 6)
      this.weeksToApply.push({
        label: `${weekStart.toLocaleDateString()} - ${weekEnd.toLocaleDateString()}`,
        selected: false
      })
      currentDate.setDate(currentDate.getDate() + 7)
    }
  }

  saveScheduleSettings() {
    // Implement logic to save schedule settings
    console.log('Schedule settings saved')
  }

  goBack() {
    this.routerExtensions.back()
  }
}
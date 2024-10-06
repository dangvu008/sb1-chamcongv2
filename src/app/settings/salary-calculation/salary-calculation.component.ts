import { Component } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular'

@Component({
  selector: 'ns-salary-calculation',
  templateUrl: './salary-calculation.component.html',
  styleUrls: ['./salary-calculation.component.css']
})
export class SalaryCalculationComponent {
  baseSalary = ''
  workingDaysPerMonth = ''
  overtimeRate = ''
  nightShiftRate = ''
  weekendRate = ''
  holidayRate = ''
  sickLeaveRate = ''

  constructor(private routerExtensions: RouterExtensions) {}

  saveSalarySettings() {
    // Implement logic to save salary calculation settings
    console.log('Salary calculation settings saved')
  }

  goBack() {
    this.routerExtensions.back()
  }
}
import { Component, OnInit } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular'
import { Geolocation } from '@nativescript/geolocation'
import { getCurrentLocation } from '@nativescript/geolocation'

@Component({
  selector: 'ns-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isClockedIn = false
  clockingLocation: any = null

  constructor(private routerExtensions: RouterExtensions) {}

  ngOnInit() {
    this.requestLocationPermission()
  }

  async requestLocationPermission() {
    const hasPermission = await Geolocation.enableLocationRequest()
    if (hasPermission) {
      console.log('Location permission granted')
    } else {
      console.log('Location permission denied')
    }
  }

  async toggleClock() {
    if (!this.isClockedIn) {
      try {
        const location = await getCurrentLocation({
          desiredAccuracy: 3,
          updateDistance: 10,
          maximumAge: 20000,
          timeout: 20000
        })
        this.clockingLocation = location
        console.log('Clocking location:', this.clockingLocation)
      } catch (error) {
        console.error('Error getting location:', error)
      }
    }
    this.isClockedIn = !this.isClockedIn
  }

  navigateTo(route: string) {
    this.routerExtensions.navigate([route], { transition: { name: 'slide' } })
  }
}
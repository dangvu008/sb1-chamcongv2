import { Component } from '@angular/core'

@Component({
  selector: 'ns-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profiles = [
    { name: 'Default Profile', location: 'Office', startTime: '08:00', clockInTime: '09:00', clockOutTime: '17:00' }
  ]

  selectedProfile: any = null

  createProfile() {
    // Implement profile creation logic
  }

  editProfile(profile: any) {
    this.selectedProfile = { ...profile }
  }

  deleteProfile(profile: any) {
    // Implement profile deletion logic
  }

  saveProfile() {
    // Implement profile saving logic
  }
}
import { Component } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular'
import { confirm } from '@nativescript/core/ui/dialogs'

@Component({
  selector: 'ns-clocking-profile-settings',
  templateUrl: './clocking-profile-settings.component.html',
  styleUrls: ['./clocking-profile-settings.component.css']
})
export class ClockingProfileSettingsComponent {
  profiles = [
    { name: 'Default Profile', location: 'Office', startTime: '08:00', clockInTime: '09:00', clockOutTime: '17:00' }
  ]

  selectedProfile: any = null
  locationSuggestions: string[] = []

  constructor(private routerExtensions: RouterExtensions) {}

  createProfile() {
    this.selectedProfile = { name: '', location: '', startTime: '', clockInTime: '', clockOutTime: '' }
  }

  editProfile(profile: any) {
    this.selectedProfile = { ...profile }
  }

  confirmDelete(profile: any) {
    confirm({
      title: "Delete Profile",
      message: "Are you sure you want to delete this profile?",
      okButtonText: "Yes",
      cancelButtonText: "No"
    }).then(result => {
      if (result) {
        this.deleteProfile(profile)
      }
    })
  }

  deleteProfile(profile: any) {
    const index = this.profiles.indexOf(profile)
    if (index > -1) {
      this.profiles.splice(index, 1)
    }
  }

  saveProfile() {
    const index = this.profiles.findIndex(p => p.name === this.selectedProfile.name)
    if (index > -1) {
      this.profiles[index] = { ...this.selectedProfile }
    } else {
      this.profiles.push({ ...this.selectedProfile })
    }
    this.selectedProfile = null
  }

  onLocationTextChange(args: any) {
    const searchText = args.object.text.toLowerCase()
    this.locationSuggestions = this.profiles
      .map(p => p.location)
      .filter((location, index, self) => 
        self.indexOf(location) === index && location.toLowerCase().includes(searchText)
      )
  }

  onLocationSelected(args: any) {
    const picker = args.object
    this.selectedProfile.location = this.locationSuggestions[picker.selectedIndex]
  }

  goBack() {
    this.routerExtensions.back()
  }
}
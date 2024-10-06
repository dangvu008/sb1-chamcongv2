import { Component, OnInit } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular'
import { device } from '@nativescript/core'

@Component({
  selector: 'ns-interface-settings',
  templateUrl: './interface-settings.component.html',
  styleUrls: ['./interface-settings.component.css']
})
export class InterfaceSettingsComponent implements OnInit {
  darkMode = false
  fontSize = 16
  languages = ['English', 'Tiếng Việt']
  selectedLanguage: string

  constructor(private routerExtensions: RouterExtensions) {}

  ngOnInit() {
    this.selectedLanguage = device.language === 'vi' ? 'Tiếng Việt' : 'English'
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode
    // Implement dark mode logic here
  }

  changeFontSize(size: number) {
    this.fontSize = size
    // Implement font size change logic here
  }

  onLanguageChange(args) {
    let picker = <ListPicker>args.object
    this.selectedLanguage = this.languages[picker.selectedIndex]
    // Implement language change logic here
  }

  goBack() {
    this.routerExtensions.back()
  }
}
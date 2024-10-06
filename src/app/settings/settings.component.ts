import { Component } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular'

@Component({
  selector: 'ns-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  constructor(private routerExtensions: RouterExtensions) {}

  navigateTo(route: string) {
    this.routerExtensions.navigate([route], { transition: { name: 'slide' } })
  }

  goBack() {
    this.routerExtensions.back()
  }
}
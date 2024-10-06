import { Component } from '@angular/core'

@Component({
  selector: 'ns-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchQuery = ''
  searchResults = []

  onSearch() {
    // Implement search logic here
  }
}
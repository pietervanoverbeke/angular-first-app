import { Component } from '@angular/core';
// assignment 3 from Angular Course (between 44-45)
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  displayDetails: boolean = false
  logItems: number[] = []

  onDisplayDetailsClick() {
    this.displayDetails = !this.displayDetails
    this.logItems.push(new Date().getTime())
  }

  getBackgroundColor(index: number) {
    if (index >= 4) {
      return 'blue'
    } else {
      return 'unset'
    }
  }

}

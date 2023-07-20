import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { WeddingComponent } from '../wedding/wedding.component';
import { HoludComponent } from '../holud/holud.component';
import { ReceptionComponent } from '../reception/reception.component';



@Component({
  selector: 'app-landing-page',
  templateUrl: 'landing-page.component.html',
  styleUrls: ['landing-page.component.css']
})
export class LandingPageComponent {
  isFullScreen = false;
  isTransitionReverse = false;
  isBackButtonVisible = false;

  constructor(private location: Location,private router: Router) {}

  toggleFullScreen() {

    setTimeout(()=>{

    this.isFullScreen = !this.isFullScreen;
    this.isTransitionReverse = false; // Reset the transition direction
    this.isBackButtonVisible = true; // Show the back button

    },500);
    
  }

  goBack() {
    this.isTransitionReverse = true; // Set the transition direction to reverse
    setTimeout(() => {
      this.isFullScreen = false; // Reset to pre-transition phase after a delay
      this.isBackButtonVisible = false; // Hide the back button after the transition
    }, 500); // Adjust the delay time to match the transition duration
    
  }

  goToWedding() {
    this.router.navigate(['/wedding']);
  }

  goToHolud() {
    this.router.navigate(['/holud']);
  }

  goToReception() {
    this.router.navigate(['/reception']);
  }
  goHome() {
    this.router.navigateByUrl(''); // Replace '/' with your desired home route
  }
  
}

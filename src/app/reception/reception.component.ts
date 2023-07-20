import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.css']
})
export class ReceptionComponent {
  images = [
    '../../assets/images/img1.png',
    '../../assets/images/img2.png',
    '../../assets/images/img3.png',
    '../../assets/images/img1.png',
    '../../assets/images/img2.png',
    '../../assets/images/img3.png',
    '../../assets/images/img1.png',
    '../../assets/images/img2.png',
    '../../assets/images/img3.png',
    '../../assets/images/img1.png',
    '../../assets/images/img2.png',
    '../../assets/images/img3.png',
    '../../assets/images/img1.png',
    '../../assets/images/img2.png',
    '../../assets/images/img3.png',
    '../../assets/images/img1.png',
    '../../assets/images/img2.png',
    '../../assets/images/img3.png',
    '../../assets/images/img1.png',
    '../../assets/images/img2.png',
    '../../assets/images/img3.png',
    '../../assets/images/img1.png',
    '../../assets/images/img2.png',
    '../../assets/images/img3.png',
    '../../assets/images/img1.png',
    '../../assets/images/img2.png',
    '../../assets/images/img3.png',
    '../../assets/images/img1.png',
    '../../assets/images/img2.png',
    '../../assets/images/img3.png',
    '../../assets/images/img1.png',
    '../../assets/images/img2.png',
    '../../assets/images/img3.png',
    '../../assets/images/img1.png',
    '../../assets/images/img2.png',
    '../../assets/images/img3.png',
    '../../assets/images/img1.png',
    '../../assets/images/img2.png',
    '../../assets/images/img3.png',
   
  ];

  constructor(private location: Location, private router: Router) {}

  slideWidth = 320;
  slideMargin = 10;
  currentIndex = 0;
  transformValue = 0;

  previousSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.updateTransformValue();
  }

  nextSlide() {
    if (this.currentIndex === this.images.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
    this.updateTransformValue();
  }

  updateTransformValue() {
    const containerWidth = this.slideWidth * this.images.length + this.slideMargin * (this.images.length - 1);
    const maxTransformValue = -(containerWidth - this.slideWidth);
    this.transformValue = Math.max(maxTransformValue, -this.currentIndex * (this.slideWidth + this.slideMargin));
  }

  goBack() {
    this.location.back();
  }

  goHome() {
    this.router.navigateByUrl(''); // Replace '/' with your desired home route
  }
}

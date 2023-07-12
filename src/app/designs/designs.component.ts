import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-designs',
  templateUrl: './designs.component.html',
  styleUrls: ['./designs.component.css'],
})
export class DesignsComponent {
  brideName = '';
  groomName = '';
  mapName = '';
  selectedDate = '';
  selectedTime = '';
  daughterOf = '';
  sonOf = '';
  contactNumber = '';

  @ViewChild('imageRef', { static: true }) imageRef!: ElementRef<HTMLImageElement>;

  constructor(private el: ElementRef) {}

  imageChange(event: any) {
    const src = event.target.getAttribute('src');
    const prev: any = document.getElementById('preview');
    prev.src = src;
    const imageSlide = document.getElementsByClassName('img-slide');
    for (let i = 0; i < imageSlide.length; i++) {
      imageSlide[i].classList.remove('active');
    }
    this.el.nativeElement.parentElement.classList.add('active');
  }

  clickFun() {
    if (navigator.share) {
      navigator
        .share({
          title: 'Copied Link',
          url: 'https://warc.digital/',
        })
        .then(() => {
          console.log('Thanks for sharing!');
        })
        .catch(console.error);
    }
  }

  updateImageOverlay() {
    const textOverlay: any = document.querySelector('.text-overlay');
    textOverlay.children[0].textContent = `${this.brideName} & ${this.groomName}`;
    textOverlay.children[1].textContent = this.selectedDate;
    textOverlay.children[2].textContent = this.selectedTime;
    textOverlay.children[3].textContent = this.daughterOf;
    textOverlay.children[4].textContent = this.sonOf;
    textOverlay.children[5].textContent = this.contactNumber;
    textOverlay.children[6].textContent = this.mapName;
  }

  onDateChange(event: MatDatepickerInputEvent<Date>) {
    const selectedDate = event.value;
    this.selectedDate = selectedDate ? selectedDate.toDateString() : '';
    this.updateImageOverlay();
  }

  downloadImage() {
    const imageElement: HTMLImageElement = this.imageRef.nativeElement;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = imageElement.naturalWidth;
    canvas.height = imageElement.naturalHeight;
    context?.drawImage(imageElement, 0, 0);

    const brideNameText = this.brideName;
    const groomNameText = this.groomName;
    const mapNameText = this.mapName;
    const dateText = this.selectedDate;
    const timeText = this.selectedTime;
    const daughterOfText = this.daughterOf;
    const sonOfText = this.sonOf;
    const contactNumberText = this.contactNumber;

    if (context) {
      context.font = '24px Arial';
      context.fillStyle = 'white';
      context.fillText(`${brideNameText} & ${groomNameText}`, 20, 40);
      context.fillText(dateText, 20, 80);
      context.fillText(timeText, 20, 120);
      context.fillText(daughterOfText, 20, 160);
      context.fillText(sonOfText, 20, 200);
      context.fillText(contactNumberText, 20, 240);
      context.fillText(mapNameText, 20, 280);
    }

    const downloadLink = document.createElement('a');
    downloadLink.href = canvas.toDataURL('image/png');
    downloadLink.download = 'design.png';
    downloadLink.click();
  }
}

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCard, MatCardContent, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { Component, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [NgbCarouselModule, FormsModule, MatSlideToggleModule, MatCard, MatCardContent, MatCardSubtitle, MatCardTitle],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.css'
})
export class ToursComponent {
  images = [
    '../assets/img/albanien-urlaub.jpg',
    '../assets/img/albanien-urlaub2.jpg',
  ]


  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel | undefined;

  togglePaused() {
    if (this.paused) {
      if (this.carousel) {
        this.carousel.cycle();
      }
    }
    else {
      if (this.carousel) {
        this.carousel.pause();
      }
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
}

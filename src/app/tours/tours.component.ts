import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCard, MatCardContent, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule, FormsModule, MatSlideToggleModule, MatCard, MatCardContent, MatCardSubtitle, MatCardTitle],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.css'
})
export class ToursComponent implements OnInit {

  images = [
    '../assets/img/albanien-urlaub.jpg',
    '../assets/img/albanien-urlaub2.jpg',
  ]

  carouselList: CarouselItem[] = [
    {
      images: [
        '../assets/img/albanien-urlaub.jpg',
        '../assets/img/albanien-urlaub2.jpg'], interval: 0
    },
    {
      images: [
        '../assets/img/albanien-urlaub.jpg',
        '../assets/img/albanien-urlaub2.jpg'], interval: 0
    },
    {
      images: [
        '../assets/img/albanien-urlaub.jpg',
        '../assets/img/albanien-urlaub2.jpg'], interval: 0
    },
    {
      images: [
        '../assets/img/albanien-urlaub.jpg',
        '../assets/img/albanien-urlaub2.jpg'], interval: 0
    },
    {
      images: [
        '../assets/img/albanien-urlaub.jpg',
        '../assets/img/albanien-urlaub2.jpg'], interval: 0
    },
    {
      images: [
        '../assets/img/albanien-urlaub.jpg',
        '../assets/img/albanien-urlaub2.jpg'], interval: 0
    },
    {
      images: [
        '../assets/img/albanien-urlaub.jpg',
        '../assets/img/albanien-urlaub2.jpg'], interval: 0
    },
    {
      images: [
        '../assets/img/albanien-urlaub.jpg',
        '../assets/img/albanien-urlaub2.jpg'], interval: 0
    },
  ];

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel | undefined;

  private readonly maxRandomInterval = 10000;
  private readonly minRandomInterval = 5000;

  favorites: Set<number> = new Set(); // Store favorite slide indices
  showNavigationArrows: boolean = true;

  ngOnInit(): void {
    this.carouselList.forEach(carouselItem => {
      carouselItem.interval = this.getRandomInterval();
    });
  }

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


  getRandomInterval(): number {
    return Math.floor(Math.random() * (this.maxRandomInterval - this.minRandomInterval + 1)) + this.minRandomInterval;
  }

  // hideNavigationArrows() {
  //   this.showNavigationArrows = false;
  // }
  // unhideNavigationArrows() {
  //   this.showNavigationArrows = true;
  // }

  toggleFavorite(index: number) {
    if (this.favorites.has(index)) {
      this.favorites.delete(index);
    } else {
      this.favorites.add(index);
    }
  }

  isFavorite(index: number): boolean {
    return this.favorites.has(index);
  }

}
export interface CarouselItem {
  images: string[];
  interval: number;
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  @ViewChild('sliderContainer') sliderContainer!: ElementRef<HTMLDivElement>;

  private currentIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.showSlide(this.currentIndex);
      this.currentIndex = (this.currentIndex + 1) % this.sliderContainer.nativeElement.children.length;
    }, 3000);
  }

  showSlide(index: number): void {
    const slides = this.sliderContainer.nativeElement.children;
    for (let i = 0; i < slides.length; i++) {
      if (i === index) {
        slides[i].classList.add('active');
      } else {
        slides[i].classList.remove('active');
      }
    }
  }
}

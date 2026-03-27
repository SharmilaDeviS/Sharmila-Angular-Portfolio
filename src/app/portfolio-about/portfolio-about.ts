import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-portfolio-about',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './portfolio-about.html',
  styleUrl: './portfolio-about.css',
})
export class PortfolioAbout {
  currentIndex = 0;
  awards = [
    {
      date: '2021', 
      title: 'Best Performer Award',
      desc: 'Recognized for exceptional contribution and technical excellence at Sterling.',
      image: '2021.jpeg'
    },
    {
      date: '2022',
      title: 'Excellence in Innovation',
      desc: 'For implementing creative solutions that improved system efficiency.',
      image: '2022.jpeg'
    },
    {
      date: '2022',
      title: 'Star Performer',
      desc: 'Awarded for outstanding dedication and project delivery milestones.',
      image: '2022Dec.jpeg'
    },
    {
      date: '2023', 
      title: 'Senior Leadership Award',
      desc: 'Recognized for mentoring team members and driving project success.',
      image: '2023.jpeg'
    }
  ];
  next() {
    if (this.currentIndex < this.awards.length - 3) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}

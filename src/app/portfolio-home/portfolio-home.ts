import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PortfolioAbout } from '../portfolio-about/portfolio-about';
import { PortfolioProject } from '../portfolio-project/portfolio-project';
import { PortfolioContactUs } from '../portfolio-contact-us/portfolio-contact-us';

@Component({
  selector: 'app-portfolio-home',
  standalone: true,
  imports: [CommonModule, PortfolioAbout, PortfolioProject, PortfolioContactUs],
  templateUrl: './portfolio-home.html',
  styleUrl: './portfolio-home.css',
})
export class PortfolioHome {}

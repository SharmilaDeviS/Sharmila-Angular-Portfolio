import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-project.html',
  styleUrl: './portfolio-project.css',
})
export class PortfolioProject {
  professionalProjects = [
    {
      name: 'CIMA IMPACT — Bank of America',
      company: 'Accenture',
      role: 'Senior Software Analyst',
      timeline: 'Aug 2025 – Dec 2025',
      description: 'Lead development of the CIMA Impact Application using Angular 18. Implemented complex client requirements and ensured 100% compliance via Jest unit testing.',
      tags: ['Angular 18', 'Jest', 'Unit Testing', 'Audit Banking'],
      terminalFile: 'cima-impact.spec.ts',
      terminalCode: `describe('CIMAImpact', () => {
  it('should pass audit', () => {
    expect(compliance).toBe(true);
  });
});`,
      isConfidential: true
    },
    {
      name: 'CIMA Central Application',
      company: 'Accenture',
      role: 'Senior Software Analyst',
      timeline: 'Oct 2023 – Present',
      description: 'Directed the migration from Angular 16 to 18. Resolved SonarQube findings and optimized performance for core banking operations.',
      tags: ['Angular 18', 'SonarQube', 'Migration'],
      terminalFile: 'migration.ts',
      terminalCode: `const upgrade = {
  from: 16,
  to: 18,
  status: 'Complete'
};`,
      isConfidential: true
    },
    
    {
      name: 'CAMS NPS Platform',
      company: 'Sterling Software',
      role: 'Software Engineer',
      timeline: 'Aug 2021 – Oct 2023',
      description: 'Developed eNPS registration, contribution, and payment modules. Designed a standalone API Library Admin Application.',
      tags: ['Angular 12', 'SCSS','Flex', 'Subscriber Contribution', 'Pensions', 'SIP'],
      terminalFile: 'nps-core.scss',
      terminalCode: `.nps-portal {
  theme: 'Sterling';
  grid: 'dynamic';
}`,
      isConfidential: true
    },
    {
      name: 'FYXT Application',
      company: 'Building Blocks Software Services',
      role: 'Junior Software Engineer',
      timeline: 'May 2021 – Aug 2021',
      description: 'Contributed to FYXT, a property management platform connecting managers, tenants and vendors.',
      tags: ['Angular 10', 'Bootstrap', 'Shared components', 'tenant', 'vendor', 'property management'],
      terminalFile: 'nps-core.scss',
      terminalCode: `.nps-portal {
  theme: 'Sterling';
  grid: 'dynamic';
}`,
      isConfidential: true
    },
    {
      name: 'Vizza Insurance broking services',
      company: 'Vizza Insurance broking services Pvt Ltd (Tecdata Payroll)',
      role: 'Angular Developer',
      timeline: 'Mar 2019 – May 2021',
      description: 'Built responsive insurance portal applications enabling customers to compare, purchase and renew policies online',
      tags: ['Angular 5 - 10', 'reactive forms', 'premium calculation', 'Angular Material'],
      terminalFile: 'nps-core.scss',
      terminalCode: `.nps-portal {
  theme: 'Sterling';
  grid: 'dynamic';
}`,
      isConfidential: true
    }

  ];


  
  // Projects you build in your free time
  labProjects = [
  {
    name: 'Portfolio Web Engine',
    description: 'A custom-built portfolio engine using Angular 21, featuring dynamic routing, intersection observers, and modern CSS-grid layouts.',
    tags: ['Angular 21', 'CSS Grid', 'Animation'],
    terminalFile: 'portfolio.css',
    terminalCode: `.hero-shadow { \n  filter: drop-shadow(0 0 20px orange); \n}`,
    githubUrl: 'https://github.com' // Add your link here
  },
  {
    name: 'Little Artists',
    description: 'Experimenting with real-time API integrations and RxJS observables for high-performance data streaming and state management.',
    tags: ['RxJS', 'REST API', 'Design Systems'],
    terminalFile: 'file.service.ts',
    terminalCode: `const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);`,
    githubUrl: 'https://github.com' // Add your link here
  },
  {
    name: 'Samila tutorials',
    description: 'A custom-built portfolio engine using Angular 21, featuring dynamic routing, intersection observers, and modern CSS-grid layouts.',
    tags: ['Angular 21', 'CSS Grid', 'Animation'],
    terminalFile: 'feesCalculation.ts',
    terminalCode: `if (syllabusValue == 4) {
      let national3 = 50;
      let amount3 = national3*hours*dayorweek;
      this.totalamnt = "Suggested market rate: RM "+national3+"/hour. "+dayorweek+"day x "+hours+"hour/week. RM "+amount3+"/month";`,
    githubUrl: 'https://github.com' // Add your link here
  },
  {
    name: 'Velan Architecture',
    description: 'A conceptual architectural showcase designed with a focus on geometric layouts, smooth scroll transitions, and high-fidelity image rendering.',
    tags: ['Angular 21', 'Aesthetic UI', 'Framer Motion', 'Api Services'],
    terminalFile: 'common.ts',
    terminalCode: ` this.http.post('http://localhost:3000/contact', data).subscribe(
          res => {
            console.log('Email sent successfully', res);
            this.dialogRef.close();
          },
          err => console.error('Error sending email', err)
        ); this.http.post('http://localhost:3000/contact', data).subscribe(
          res => {
            console.log('Email sent successfully', res);
            this.dialogRef.close();
          },
          err => console.error('Error sending email', err)
        );`,
    githubUrl: 'https://github.com'
  }
];

}

import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { SectionHeadingComponent } from '../../shared/section-heading.component';
import { RevealDirective } from '../../shared/reveal.directive';

interface Job {
  role: string;
  company: string;
  period: string;
  description: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeadingComponent, RevealDirective, UpperCasePipe]
})
export class ExperienceComponent {
  jobs = signal<Job[]>([
    {
      role: 'Sr. Software Engineer',
      company: 'Aman for financial services',
      period: 'June 2025 — Present',
      description: [
        'Develop and design fintech systems.',
        'Maintain and extend existing fintech products, and enhance their features and performance.',
        'Collaborate with cross-functional teams to drive innovation and improve user experience.',
        'Diagnose and resolve customer technical issues with detailed root-cause analysis.'
      ]
    },
    {
      role: 'Software Developer',
      company: 'MeemNoon, KSA (Remote)',
      period: 'June 2025 — May 2026',
      description: [
        'Develop and design new projects and features for existing products.',
        'Built a full-stack web application from scratch — back-end services, front-end interface, APIs, and database.',
      ]
    },
    {
      role: '.NET Full Stack Developer',
      company: 'CloudSoft5, Cairo',
      period: 'October 2022 — June 2025',
      description: [
        'Maintained and extended an ERP system built on .NET technologies.',
        'Contributed to the R&D department to analyze and implement new features.',
        'Helped manage servers and cloud services.'
      ]
    },
    {
      role: 'Software Developer',
      company: 'Commatechs, Cairo',
      period: 'September 2020 — September 2021',
      description: [
        'Designed and built web and desktop applications for client business needs.'
      ]
    }
  ]);
}

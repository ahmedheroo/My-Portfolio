import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

interface Job {
  role: string;
  company: string;
  period: string;
  description: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
  jobs = signal<Job[]>([
    {
      role: '.Net Full Stack Developer',
      company: 'MeemNoon, KSA',
      period: 'june 2025 — Present',
      description: [
        'Develop and design new projects and new features for existing projects',
        'Develop a full stack web application from scratch, including back-end services, front-end interface, APIs and database.',
        'Diagnosed and resolved technical issues for customers, providing detailed root-cause analysis.'
      ]
    },
    {
      role: '.Net Full Stack Developer',
      company: 'CloudSoft5, Cairo',
      period: 'October 2022 — june 2025',
      description: [
        'Maintain and develop new features for an ERP system based on .Net techs.',
        'Develop a full stack web application from scratch, including back-end services, front-end interface, APIs and database.',
        'Providing help in managing servers and cloud services.',
        'Leading department of R&D.'
      ]
    },
    {
      role: 'Software Developer',
      company: 'Commatechs, Cairo',
      period: 'September 2020 — September 2021',
      description: [
        'Design and create new web and desktop applications for clients for several needs of their business.'
      ]
    }
  ]);
}
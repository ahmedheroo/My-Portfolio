import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { SectionHeadingComponent } from '../../shared/section-heading.component';
import { RevealDirective } from '../../shared/reveal.directive';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeadingComponent, RevealDirective]
})
export class EducationComponent {
  educationHistory = signal<EducationItem[]>([
    {
      degree: 'DevOps Engineer Diploma',
      institution: 'DEPI, Cairo',
      period: 'Jul 2026 – Dec 2026'
    },
    {
      degree: '.Net Full Stack Diploma, Intensive Code Camp',
      institution: 'ITI, Minya',
      period: 'Apr 2021 – Sep 2021'
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Faculty of Science – Al Minya University',
      period: '2013 – 2017'
    }
  ]);
}

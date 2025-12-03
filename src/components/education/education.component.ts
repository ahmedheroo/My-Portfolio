import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationComponent {
  educationHistory = signal<EducationItem[]>([
    {
      degree: 'Diploma, Intensive Code Camp',
      institution: 'ITI, Al Minya',
      period: 'Apr 2021 – Sep 2021'
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Faculty of Science – Al Minya University',
      period: '2013 – 2017'
    }
  ]);
}

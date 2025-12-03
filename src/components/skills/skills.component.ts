import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

interface Skill {
  name: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  skillCategories = signal<SkillCategory[]>([
    {
      title: 'Backend',
      skills: [
        { name: 'C#' },
        { name: 'ASP.net' },
        { name: 'ASP.net MVC' },
        { name: '.Net Core' },
        { name: 'Web API' },
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'Angular 14+' },
        { name: 'HTML & CSS' },
        { name: 'JavaScript' },
        { name: 'TypeScript' },
        { name: 'jQuery' },
        { name: 'Ajax' },
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'SQL' },
        { name: 'Entity Framework' },
        { name: 'Redis' },
      ]
    },
     {
      title: 'Conceptual Knowledge',
      skills: [
        { name: 'OOP' },
        { name: 'Design Patterns' },
        { name: 'SOLID Principles' },
        { name: 'Agile' },
        { name: 'Security Concerns' },
      ]
    },
    {
      title: 'Tools & Skills',
      skills: [
        { name: 'Git' },
        { name: 'TFS' },
        { name: 'MCP servcer-client' },
        { name: 'Cloud Servers' },
        { name: 'Problem Solving' },
        { name: 'Troubleshooting' }
      ]
    }
  ]);
}
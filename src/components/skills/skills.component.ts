import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { SectionHeadingComponent } from '../../shared/section-heading.component';
import { RevealDirective } from '../../shared/reveal.directive';

interface Skill {
  name: string;
}

interface SkillCategory {
  title: string;
  icon: 'server' | 'layout' | 'database' | 'cloud' | 'workflow';
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeadingComponent, RevealDirective]
})
export class SkillsComponent {
  coreStack = ['.NET Core', 'C#', 'Angular', 'TypeScript', 'SQL Server', 'REST APIs', 'Redis', 'Azure'];

  skillCategories = signal<SkillCategory[]>([
    {
      title: 'Backend',
      icon: 'server',
      skills: [
        { name: 'C#' },
        { name: 'ASP.NET MVC' },
        { name: '.NET Core' },
        { name: 'REST APIs / Web API' },
        { name: 'Entity Framework & LINQ' },
        { name: 'Clean & Layered Architecture' },
        { name: 'Auth (JWT / Identity)' },
        { name: 'External & 3rd-Party APIs' },
        { name: 'Payment Gateway Integrations' },
        { name: 'MCP Client–Server Architecture' },
        { name: 'Object-Oriented Programming' },
        { name: 'Design Patterns (Repository, Unit of Work, Factory…)' },
        { name: 'SOLID Principles' },
        { name: 'Application Security Best Practices' },
      ]
    },
    {
      title: 'Frontend',
      icon: 'layout',
      skills: [
        { name: 'Angular 14+' },
        { name: 'TypeScript' },
        { name: 'JavaScript' },
        { name: 'HTML & CSS' },
        { name: 'Responsive UI Design' },
        { name: 'Modular & Reusable Components' },
        { name: 'jQuery' },
        { name: 'Ajax' },
      ]
    },
    {
      title: 'Databases & Caching',
      icon: 'database',
      skills: [
        { name: 'SQL Server' },
        { name: 'PostgreSQL' },
        { name: 'Stored Procedures, Functions, Views' },
        { name: 'Indexing' },
        { name: 'Query Optimization' },
        { name: 'Redis' },
      ]
    },
    {
      title: 'DevOps & Version Control',
      icon: 'cloud',
      skills: [
        { name: 'Git & Git Workflows' },
        { name: 'CI/CD Pipelines' },
        { name: 'TFS' },
        { name: 'Azure' },
        { name: 'Cloud Hosting & Deployment' },
        { name: 'Documentation' },
      ]
    },
    {
      title: 'Engineering Practices',
      icon: 'workflow',
      skills: [
        { name: 'Agile & Scrum' },
        { name: 'Problem Solving & Debugging' },
        { name: 'System Design Fundamentals' },
        { name: 'Security & Compliance' },
      ]
    }
  ]);
}

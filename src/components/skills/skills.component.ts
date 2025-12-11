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
        { name: 'ASP.net MVC' },
        { name: '.Net Core' },
        { name: 'REST APIs / Web API' },
        { name: 'Entity Framework & LINQ' },
        { name: 'Clean Architecture & Layered Architecture' },
        { name: 'Authentication & Authorization (JWT / Identity)' },
        { name: 'External APIs & 3rd-Party Integrations' },
        { name: 'Payment Gateways Integrations' },
        { name: 'MCP Client–Server Architecture' },
        { name: 'Object-Oriented Programming (OOP)' },
        { name: 'Design Patterns (Repository, Unit of Work, Factory, etc.)' },
        { name: 'SOLID Principles' },
        { name: 'Application Security Best Practices' },
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
        { name: 'Responsive UI Design' },
        { name: 'Modular & Reusable Component Design' },
      ]
    },
    {
      title: 'Databases & Caching',
      skills: [
        { name: 'SQL Server' },
        { name: 'Postgree Sql' },
        { name: 'Stored Procedures, Functions, Views' },
        { name: 'Indexing' },
        { name: 'Query Optimization' },
        { name: 'Redis' },
      ]
    },
    {
      title: 'DevOps & Version Control',
      skills: [
        { name: 'Git' },
        { name: 'Git Workflows' },
        { name: 'CI/CD Pipelines' },
        { name: 'TFS' },
        { name: 'Azure' },
        { name: 'Cloud Hosting & Deployment' },
        { name: 'Documentation & Version Control' },
      ]
    }, 
    {
      title: 'Software Engineering Practices',
      skills: [
        { name: 'Agile & Scrum Methodologies' },
        { name: 'Problem Solving & Debugging' },
        { name: 'System Design Fundamentals' },
        { name: 'Security & Compliance Considerations' },
      ]
    }
  ]);
}
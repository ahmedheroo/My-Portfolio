import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { SectionHeadingComponent } from '../../shared/section-heading.component';
import { RevealDirective } from '../../shared/reveal.directive';

interface Project {
  image: string;
  title: string;
  description: string;
  stack: string[];
  liveUrl: string;
  repoUrl: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeadingComponent, RevealDirective]
})
export class ProjectsComponent {
  projects = signal<Project[]>([
    {
      image: 'assets/dashboard-template.png',
      title: 'MarketPlace',
      description: 'A full marketplace platform built for a district in Upper Egypt — helping people buy and sell locally with trusted guarantees. Covers the whole flow: listings, transactions, and an admin back office.',
      stack: ['.NET Core', 'Angular', 'SQL', 'Web API'],
      liveUrl: '#',
      repoUrl: '#',
      featured: true
    },
    {
      image: 'assets/user-panel.avif',
      title: 'Custom Web & Desktop Apps',
      description: 'Bespoke web and desktop applications for various clients — tailored to each business, taken from concept to deployment.',
      stack: ['ASP.NET', '.NET Core', 'C#', 'SQL', 'jQuery'],
      liveUrl: '#',
      repoUrl: '#',
      featured: false
    },
    {
      image: 'assets/chatbot.jpg',
      title: 'AI ChatBot',
      description: 'An AI assistant that answers questions about the system it runs on — fast data retrieval, report export, and analysis of existing data.',
      stack: ['.NET Core', 'API', 'JavaScript', 'SQL', 'MCP'],
      liveUrl: '#',
      repoUrl: '#',
      featured: false
    }
  ]);
}

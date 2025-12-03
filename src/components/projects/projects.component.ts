import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

interface Project {
  image: string;
  title: string;
  description: string;
  stack: string[];
  liveUrl: string;
  repoUrl: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  projects = signal<Project[]>([
    {
      image: 'assets/dashboard-template.png',
      title: 'MarketPlace',
      description: 'A MarketPlace specialized for a certain district in upper Egypt, serving people and support then in buying and sellings with gurantee.',
      stack: ['.NET Core', 'Angular', 'SQL', 'Web API'],
      liveUrl: '#',
      repoUrl: '#'
    },
    {
      image: 'assets/user-panel.avif',
      title: 'Custom Web & Desktop Apps',
      description: 'Designed and created bespoke web and desktop applications for various clients, tailoring solutions to their specific business needs from conception to deployment.',
      stack: ['ASP.net','.net core', 'C#', 'SQL','jQuery',],
      liveUrl: '#',
      repoUrl: '#'
    },
    {
      image: 'assets/chatbot.jpg',
      title: 'AI ChatBot',
      description: 'AI chatbot that can answer you with any question about the system its installed on giving fast answers and fast data retrieve with ability to export resports and give analysis for existing data. ',
      stack: ['.Net core', 'API', 'JavaScript', 'SQL', 'MCP'],
      liveUrl: '#',
      repoUrl: '#'
    }
  ]);
}

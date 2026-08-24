import { Component } from '@angular/core';

interface Project {
  name: string;
  period: string;
  stack: string[];
  bullets: string[];
  demo?: string;
  repo?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Blossom E-commerce Platform',
      period: 'Feb – May 2026',
      stack: ['Angular', 'Node.js', 'Express', 'MySQL'],
      bullets: [
        'Frontend development for a complete online store.',
        'Backend development for a complete online store.',
        'Authentication, shopping cart, and inventory management.',
        'Design and consumption of REST APIs for client-server communication.',
        'Collaborative work with Git and GitHub under SCRUM and Waterfall methodologies.'
      ],
      demo: 'https://blossom-detallitos.netlify.app/',
      repo: 'https://github.com/vabersal05/Pagina-Blossom.git'
    },
    {
      name: 'Online CV Creator',
      period: 'May – June 2026',
      stack: ['React', 'Node.js', 'Express'],
      bullets: [
        'Platform for creating professional resumes.',
        'Live preview in real-time.',
        'PDF document generation with a professional format.',
        'Dark mode included.',
        'Collaborative work with Git and GitHub.'
      ],
      demo: 'https://famous-kringle-2dae84.netlify.app/',
      repo: 'https://github.com/FerHer18/DevProfile-Generador-Din-mico-de-CV-en-PDF.git'
    },
    {
      name: 'Distributed Data Processing',
      period: 'May – June 2026',
      stack: ['Apache Kafka', 'Apache Spark', 'Node.js', 'JavaScript'],
      bullets: [
        'Distributed architecture for processing over 100,000 records.',
        'Configuration of producers and consumers with Kafka.',
        'Parallel data processing with Apache Spark.',
        'Complete technical documentation of the solution.'
      ]
    },
    {
      name: '"Sexta Armonía" Web Platform',
      period: 'November – December 2025',
      stack: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
      bullets: [
        'Platform for an online coffee shop.',
        'Teamwork in frontend and backend.',
        'API integration between server logic and user interface.'
      ],
      repo: 'https://github.com/FranciscoJavierSV/Proyecto_SW.git'
    }
  ];
}

import { Component } from '@angular/core';

interface SkillGroup {
  title: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  groups: SkillGroup[] = [
    { title: 'Languages', items: ['Java', 'JavaScript', 'TypeScript', 'C#', 'C++', 'SQL', 'HTML', 'CSS'] },
    { title: 'Frameworks & Libraries', items: ['Angular', 'React', 'Node.js', 'Express'] },
    { title: 'Databases', items: ['MySQL'] },
    { title: 'Tools', items: ['Git', 'GitHub', 'Docker', 'Trello', 'Jira', 'VS Code', 'Visual Studio', 'Postman', 'XAMPP'] },
    { title: 'Methodologies', items: ['SCRUM', 'Waterfall'] },
    { title: 'Other Knowledge', items: ['Frontend', 'Backend','REST APIs', 'Database Design', 'Responsive Design', 'Technical Documentation', 'Client-Server Architecture'] }
  ];
}

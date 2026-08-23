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
    { title: 'Lenguajes', items: ['Java', 'JavaScript', 'TypeScript', 'C#', 'C++', 'SQL', 'HTML', 'CSS'] },
    { title: 'Frameworks y librerías', items: ['Angular', 'React', 'Node.js', 'Express'] },
    { title: 'Bases de datos', items: ['MySQL'] },
    { title: 'Herramientas', items: ['Git', 'GitHub', 'Docker', 'Trello', 'Jira', 'VS Code', 'Visual Studio', 'Postman', 'XAMPP'] },
    { title: 'Metodologías', items: ['SCRUM', 'Cascada'] },
    { title: 'Otros conocimientos', items: ['Frontend', 'Backend','APIs REST', 'Diseño de BD', 'Diseño responsive', 'Documentación técnica', 'Cliente-Servidor'] }
  ];
}

import { Component } from '@angular/core';

interface SoftSkill {
  title: string;
  description: string;
}

@Component({
  selector: 'app-soft-skills',
  standalone: true,
  imports: [],
  templateUrl: './soft-skills.component.html',
  styleUrl: './soft-skills.component.scss'
})
export class SoftSkillsComponent {
  softSkills: SoftSkill[] = [
    { title: 'Communication', description: 'Clear communication, active listening, and ability to share technical information.' },
    { title: 'Teamwork', description: 'Collaborative work, leadership, and contribution to shared goals.' },
    { title: 'Problem Solving', description: 'Analytical thinking, debugging, and development of practical solutions.' },
    { title: 'Adaptability', description: 'Quick learning and adaptation to new technologies and environments.' },
    { title: 'Organization', description: 'Task management, time management, and attention to detail.' },
    { title: 'Continuous Learning', description: 'Self-learning and willingness to acquire new technical skills.' }
  ];
}
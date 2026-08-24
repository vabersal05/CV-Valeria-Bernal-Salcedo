import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  education = {
    degree: 'Computer Systems Engineering',
    school: 'Universidad Autónoma de Aguascalientes',
    period: '2023 — present'
  };

  certifications = [
    {
      name: 'Mendix Rapid Developer Certification',
      issuer: '2026',
      detail: 'Official certification in Low-Code application development with Mendix. Covers enterprise application development, data modeling, business logic, and user interfaces.'
    },
    {
      name: '“Patrones Hermosos” Camp',
      issuer: 'Tecnológico de Monterrey',
      detail: 'Academic camp in engineering and programming for women, focused on problem-solving, teamwork, and STEM leadership.'
    }
  ];

  languages = [
    { name: 'English', level: 'Intermediate · B2', note: 'Universidad Autónoma de Aguascalientes' }
  ];
}

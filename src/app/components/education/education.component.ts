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
    degree: 'Ingeniería en Sistemas Computacionales',
    school: 'Universidad Autónoma de Aguascalientes',
    period: '2023 — presente'
  };

  certifications = [
    {
      name: 'Mendix Rapid Developer Certification',
      issuer: '2026',
      detail: 'Certificación oficial en desarrollo de aplicaciones Low-Code: modelado de datos, lógica de negocio e interfaces de usuario.'
    },
    {
      name: 'Campamento "Patrones Hermosos"',
      issuer: 'Tecnológico de Monterrey',
      detail: 'Campamento de ingeniería y programación para mujeres, enfocado en resolución de problemas, trabajo colaborativo y liderazgo STEM.'
    }
  ];

  languages = [
    { name: 'Inglés', level: 'Intermedio · B2', note: 'Universidad Autónoma de Aguascalientes' }
  ];
}

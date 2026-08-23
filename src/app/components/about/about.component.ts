import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  stats = [
    { value: '7°', label: 'semestre cursando' },
    { value: '4', label: 'proyectos completos' },
    { value: 'B2', label: 'inglés' }
  ];
}

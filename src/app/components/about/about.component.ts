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
    { value: '7°', label: 'current semester' },
    { value: '4', label: 'complete projects' },
    { value: 'B2', label: 'english level' }
  ];
}

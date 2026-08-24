import { Component } from '@angular/core';

interface ContactItem {
  label: string;
  href: string;
  icon: 'mail' | 'phone' | 'github' | 'linkedin' | 'pin';
  external?: boolean;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  // TODO: reemplaza la URL de LinkedIn y confirma la dirección exacta que quieras mostrar.
  contact: ContactItem[] = [
    { label: 'vabersal05@gmail.com', href: 'mailto:vabersal05@gmail.com', icon: 'mail' },
    { label: '+52 449 109 2451', href: 'tel:+524491092451', icon: 'phone' },
    { label: 'github.com/vabersal05', href: 'https://github.com/vabersal05', icon: 'github', external: true },
    { label: 'linkedin.com/in/valeria-bernal-salcedo', href: 'https://www.linkedin.com/in/valeria-bernal-salcedo', icon: 'linkedin', external: true },
    { label: 'Aguascalientes, México', href: '', icon: 'pin' }
  ];

  // Coloca tu foto en src/assets/profile.jpg — mientras no exista, se muestra un marcador de posición.
  imgError = false;
}

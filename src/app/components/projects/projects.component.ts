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
      name: 'Plataforma E-commerce Blossom',
      period: 'Feb – May 2026',
      stack: ['Angular', 'Node.js', 'Express', 'MySQL'],
      bullets: [
        'Desarrollo Frontend de una tienda en línea completa.',
        'Desarrollo Backend de una tienda en línea completa.',
        'Autenticación, carrito de compras e inventario.',
        'Diseño y consumo de APIs REST para la comunicación cliente-servidor.',
        'Trabajo colaborativo con Git y GitHub bajo SCRUM y Cascada.'
      ],
      demo: 'https://blossom-detallitos.netlify.app/',
      repo: 'https://github.com/vabersal05/Pagina-Blossom.git'
    },
    {
      name: 'Creador de CV Online',
      period: 'May – Jun 2026',
      stack: ['React', 'Node.js', 'Express'],
      bullets: [
        'Plataforma para la creación de currículums profesionales.',
        'Vista previa dinámica en tiempo real.',
        'Generación de documentos PDF con formato profesional.',
        'Modo oscuro incluido.',
        'Trabajo colaborativo con Git y GitHub.'
      ],
      demo: 'https://famous-kringle-2dae84.netlify.app/',
      repo: 'https://github.com/FerHer18/DevProfile-Generador-Din-mico-de-CV-en-PDF.git'
    },
    {
      name: 'Procesamiento Distribuido',
      period: 'May – Jun 2026',
      stack: ['Apache Kafka', 'Apache Spark', 'Node.js', 'JavaScript'],
      bullets: [
        'Arquitectura distribuida para procesar más de 100,000 registros.',
        'Configuración de productores y consumidores con Kafka.',
        'Procesamiento paralelo de datos con Apache Spark.',
        'Documentación técnica completa de la solución.'
      ]
    },
    {
      name: 'Plataforma Web "Sexta Armonía"',
      period: 'Nov – Dic 2025',
      stack: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
      bullets: [
        'Plataforma web de cafetería en línea.',
        'Trabajo en equipo en frontend y backend.',
        'Integración de APIs entre lógica del servidor e interfaz de usuario.'
      ],
      repo: 'https://github.com/FranciscoJavierSV/Proyecto_SW.git'
    }
  ];
}

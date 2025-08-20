import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.html',
  styleUrls: ['./project-card.css'],
})
export class ProjectCard {
  @Input() title!: string;
  @Input() description!: string;
  @Input() githubLink!: string;
  @Input() languages: string[] = [];

  // GitHub SVG path stored once
  githubPath: string = `
    M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.579 
    0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 
    1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.774.419-1.305.762-1.605-2.665-.304-5.467-1.334-5.467-5.931 
    0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.527.117-3.183 0 0 1.008-.322 3.3 1.23a11.52 
    11.52 0 0 1 3.003-.404c1.018.005 2.043.138 3.003.404 2.291-1.552 
    3.297-1.23 3.297-1.23.655 1.656.243 2.88.119 3.183.77.84 
    1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 
    1.102.823 2.222 0 1.604-.015 2.898-.015 3.293 0 .32.192.694.799.576C20.565 
    21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z
  `;
}

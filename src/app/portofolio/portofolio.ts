import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCard } from '../project-card/project-card';
@Component({
  selector: 'app-portofolio',
  standalone: true,
  imports: [ProjectCard],
  templateUrl: './portofolio.html',
  styleUrls: ['./portofolio.css'],
})
export class Portofolio {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Omar AbdElaty - portfolio');
  }
}

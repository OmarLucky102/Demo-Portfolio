import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  imports: [CommonModule],
  templateUrl: './resume.html',
  styleUrls: ['./resume.css'],
})
export class Resume {
  sections = [
    {
      title: 'Education',
      content: `Bachelor of Information Technology  
6 October Technology University, Giza, Egypt  
Nov 2022 - Jul 2026 | Grade: A (85%)`,
      open: false,
    },
    {
      title: 'Projects',
      content: `• 3D Shooter Game Using Unity  
  Tools: Unity, Visual Studio, C#  
  - Solo project for college: designed, coded, and managed all aspects.  
  - Built gameplay systems, enemy AI, and visual effects.  

• 2D Top-Down Game (Game Jam – 2nd Place Winner)  
  Tools: Unity, Visual Studio, C#  
  - Designed and developed a 2D top-down game.  
  - Coded all gameplay mechanics.  

• University Website  
  Tools: HTML, CSS, SQL, PHP, VS Code, phpMyAdmin, Git, GitHub  
  - Worked in a team to develop a university website.  
  - Designed and implemented the SQL database.  
  - Contributed to the frontend using HTML and CSS.`,
      open: false,
    },
    {
      title: 'Technical Skills',
      content: `Languages: C#, C++, JavaScript (Node.js), HTML, CSS, SQL, PHP  
Developer Tools: Visual Studio, VS Code, Unity  
Others: Linux, GitHub`,
      open: false,
    },
    {
      title: 'Volunteer Experience',
      content: `• Microsoft Student Partner  
  Team Leader – Game Committee (Sep 2024 - May 2025, Ain Shams University)  
  - Led and monitored game dev teams, reviewed assignments, and explained topics.  
  - Supported workshops by helping participants with coding issues.  

• IEEE  
  Member – Problem Solving Committee  
  - Practiced problem solving, time management, and competitive programming using C++.  
  - Learned to write optimized, high-performance code on Codeforces.  

• Microsoft Student Partner  
  Member – Game Committee (Jan 2024 - Oct 2024)  
  - Learned Unity & C# basics.  
  - Built small interactive projects with the team.`,
      open: false,
    },
    {
      title: 'Languages',
      content: `Arabic: Native  
English: B2`,
      open: false,
    },
  ];

  toggleSection(index: number) {
    this.sections[index].open = !this.sections[index].open;
  }

  DownloadFile() {
    // your download logic here
  }
}

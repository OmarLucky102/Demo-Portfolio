import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  //inject the service
  constructor(private titleService: Title) {
    this.titleService.setTitle('Omar AbdElaty - Home');
  }
}

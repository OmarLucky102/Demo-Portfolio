import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Omar AbdElaty - contact');
  }

  name = '';
  email = '';
  message = '';

  submitForm() {
    console.log('Form submitted:', {
      name: this.name,
      email: this.email,
      message: this.message,
    });
    alert('Thanks for contacting me! I will get back to you soon.');
    this.name = '';
    this.email = '';
    this.message = '';
  }
}

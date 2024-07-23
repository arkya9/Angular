import { JokeServiceService } from './../../../../src/services/joke-service.service';

import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ViewJokeComponent } from '../view-joke/view-joke.component';

@Component({
  selector: 'app-jokecomponent',
  standalone: true,
  imports: [FormsModule, CommonModule, ViewJokeComponent],
  templateUrl: './jokecomponent.component.html',
  styleUrl: './jokecomponent.component.css',
})
export class JokecomponentComponent {
  constructor(public JokeService: JokeServiceService) {}
  jokeCategory = '';
  cat = '';
  ngOnInit() {
    this.JokeService.getJokecategory().subscribe((data: any) => {
      this.cat = data;
    });
  }
}

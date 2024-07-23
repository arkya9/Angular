import { STRING_TYPE } from '@angular/compiler';
import { JokeServiceService } from './../../../../src/services/joke-service.service';

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jokecomponent',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './jokecomponent.component.html',
  styleUrl: './jokecomponent.component.css',
})
export class JokecomponentComponent {
  constructor(public JokeService: JokeServiceService) {}

  cat = '';
  ngOnInit() {
    this.JokeService.getJokecategory().subscribe((data: any) => {
      this.cat = data;
    });
  }
}

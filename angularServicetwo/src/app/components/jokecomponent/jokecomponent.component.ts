import { JokeServiceService } from './../../../../src/services/joke-service.service';

import { Component } from '@angular/core';

@Component({
  selector: 'app-jokecomponent',
  standalone: true,
  imports: [],
  templateUrl: './jokecomponent.component.html',
  styleUrl: './jokecomponent.component.css',
})
export class JokecomponentComponent {
  constructor(public JokeService: JokeServiceService) {}
  ngOnInit() {
    this.JokeService.getJokecategory().subscribe((data) => {
      console.log(data);
    });
  }
}

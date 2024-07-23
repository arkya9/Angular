import { Component, Input, SimpleChanges } from '@angular/core';
import { JokeServiceService } from '../../../services/joke-service.service';

@Component({
  selector: 'app-view-joke',
  standalone: true,
  imports: [],
  templateUrl: './view-joke.component.html',
  styleUrl: './view-joke.component.css',
})
export class ViewJokeComponent {
  constructor(public JokeService: JokeServiceService) {}
  @Input() jokeCategory = '';
  joke = '';
  ngOnChanges(changes: SimpleChanges): void {
    if (this.jokeCategory != '') {
      this.JokeService.getJoke(this.jokeCategory).subscribe((data: any) => {
        this.joke = data.value;
        console.log(this.joke);
      });
    }
  }
}

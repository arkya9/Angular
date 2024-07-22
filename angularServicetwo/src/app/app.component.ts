import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JokecomponentComponent } from './components/jokecomponent/jokecomponent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JokecomponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angularServicetwo';
}

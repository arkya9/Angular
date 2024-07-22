import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ChildComponentComponent } from './components/child-component/child-component.component';
import { MyNewComponentComponent } from "./components/my-new-component/my-new-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserProfileComponent, ChildComponentComponent, MyNewComponentComponent],
 templateUrl: './app.component.html',
 //template:"<h1>test ts</h1>",
  styleUrl: './app.component.css'
})
export class AppComponent {
   reciveddatafromchild(e:string){
    console.log(e);

  }
  reciveddatafromchild2(e:string){
    console.log(e);

  }

  //title = 'product1';
}

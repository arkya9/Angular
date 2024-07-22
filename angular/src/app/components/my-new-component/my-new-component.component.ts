
import { Employee } from '../../models/Employee';
import { NewDirectiveDirective } from '../../custom_directive/new-directive.directive';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-new-component',
  standalone: true,
  imports: [NewDirectiveDirective],
  templateUrl: './my-new-component.component.html',
  styleUrl: './my-new-component.component.css'
})
export class MyNewComponentComponent {
  constructor(){
    console.log('constructor called1',this.emplyee[0].name)
    //I cant access any input value because Component not ready eyt
  }
  ngOnInit(){
    console.log('ng ngOnInit2',this.emplyee[0].name);
  }
emplyee:Employee[]=[
  {
    "id": 1,
    "name": "Ram",
    "mobile": 7908114893
  },
  {
    "id": 2,
    "name": "Sita",
    "mobile": 9876543210
  },
  {
    "id": 3,
    "name": "Lakshman",
    "mobile": 8765432109
  },
  {
    "id": 4,
    "name": "Hanuman",
    "mobile": 7654321098
  },
  {
    "id": 5,
    "name": "Bharat",
    "mobile": 6543210987
  }
]

}

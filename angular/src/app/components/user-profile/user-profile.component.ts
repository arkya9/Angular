import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BgchangeDirective } from '../../custom_directive/bgchange.directive';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,NgFor,CommonModule,BgchangeDirective],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  name:string="ARKO"
  mobile:number=7908114893
  textValue:string="test"
  name1:any=""
  user=[
    { "name": "Jane", "address": "Phoenix", "salary": "completed" },
    { "name": "Alice", "address": "Houston", "salary": "pending" },
    { "name": "John", "address": "San Diego", "salary": "on-hold" },

  ]



  buttonStatus:boolean=false;//this is for button status
  onChenge=()=>{alert('ok')}
  getLanguge=(event:Event)=>{
    const value=(event.target as any).value;
    alert(value)}

    // getUserName=(event:Event)=>{
    //    this.name1=(event.target as HTMLInputElement).value

    // }


}

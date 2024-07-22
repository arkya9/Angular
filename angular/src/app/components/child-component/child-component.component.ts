import { Component, EventEmitter, Input, booleanAttribute, Output } from '@angular/core';
import { MwinPipe } from '../../custom_pipe/mwin.pipe';

@Component({
  selector: 'app-child-component',
  standalone: true,
  imports: [MwinPipe],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css'
})
export class ChildComponentComponent {
@Input() namechild="";
bgcolor='red'
mwin=123456789;
@Input({alias:"phone",transform:modifiMobile}) mobile="";
@Input({transform:booleanAttribute}) iscoder!:boolean;
@Output() myEvent=new EventEmitter<string>();
@Output() myEvent2=new EventEmitter<string>();
 SendData(){
  this.myEvent.emit("angular is working")

}
SendData2(){
  this.myEvent.emit("angular is working 2")
}
}
function modifiMobile(value:any){
  return `+91 ${value}`
}


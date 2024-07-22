import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css',
})
export class ChildComponentComponent {
  taskarr = [
    { id: 1, task: 'task1' },
    { id: 2, task: 'task2' },
    { id: 3, task: 'task3' },
    { id: 4, task: 'task4' },
    { id: 5, task: 'task5' },
  ];
  @Input() name: string = '';
  @ViewChild('mytable', { static: false }) mytable?: ElementRef;
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngOnDestroy() {
    console.log('task deleted');
  }
  deleteTask(id: number) {
    this.taskarr = this.taskarr.filter((item) => item.id != id);
    //this.taskarr = [];
  }
  constructor() {
    console.log('constructor called');
  }
  ngAfterViewInit(): void {
    if (this.mytable) {
      console.log('Table Element:', this.mytable.nativeElement);
    }
  }
}

import { STRING_TYPE } from '@angular/compiler';
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
 
  // catarr : {  string , string}[] = []
   
  mp=[]
  ngOnInit() {
    
    let catarr : {[key: string]:string};
    this.JokeService.getJokecategory().subscribe((data:any) => {
      
      for( let key in data){
      
        catarr = {[data[key]] : data[key]};

        this.mp = new Map<any, any([
          [data[key], data[key]]
          ]);
          console.log(this.mp);
      //  this.catarr.push({key:data[key],value:data[key]});
        
      }
     
     
    });
  }
}

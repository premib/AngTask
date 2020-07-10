import { Component, OnInit } from '@angular/core';
import { DaysService } from '../days.service'

@Component({
  selector: 'app-day-col',
  templateUrl: './day-col.component.html',
  styleUrls: ['./day-col.component.css']
})
export class DayColComponent implements OnInit {
  
  buttons: Array<any>= [];
  buttonRef: object= {};
  iter: number= 1;
  showTopic: boolean;
  topicsDisplay: Array<any>= [];
  currentButton: string= "";

  constructor() { 
    this.showTopic= false;
  }

  ngOnInit(): void {
  }

  addButton(){
    console.log(this.currentButton)
    this.buttons.push({val: "Day "+(this.iter)})
    this.buttonRef["Day "+this.iter]= {};
    this.showTopic= true;
    
    this.iter++;
    
  }
  showTopics(it: string){
    this.currentButton= it;
    this.topicsDisplay= Object.keys(this.buttonRef[it]);
  }
  addTopic(){
    let keylength= Object.keys(this.buttonRef[this.currentButton]).length
    this.buttonRef[this.currentButton]["topic"+(++keylength)]= ""
    this.showTopics(this.currentButton)
  }

}

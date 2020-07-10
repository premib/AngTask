import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-col',
  templateUrl: './day-col.component.html',
  styleUrls: ['./day-col.component.css']
})
export class DayColComponent implements OnInit {
  
  buttons: Array<string>= [];
  iter: number= 1;

  constructor() { }

  ngOnInit(): void {
  }

  addButton(){
    this.buttons.push("Day "+(this.iter++))
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DaysService {

  topicsArray: Array<string> = [];
  name: string;
  constructor(name: string) {
    this.name= name;
   }

  addTopics(){
    this.topicsArray.push();
  }
}

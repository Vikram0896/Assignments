import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {

  Name:string="Hello";
  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'Button Clicked..!';
  }
  
 public fun()
  {
    return " Function Hello";
  }
  constructor() { }

  ngOnInit() {
  }

}

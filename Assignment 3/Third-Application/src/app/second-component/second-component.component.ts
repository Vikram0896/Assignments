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
  //Write one public function inside class named as fun() and call that function inside{{ call }}.
  fun()
  {
    return "Point No 3: Hello";
  }
  constructor() { }

  ngOnInit() {
  }

}

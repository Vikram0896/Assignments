import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`h1
  {
   color:blue;   
  }
  p,h2
{
   font-size: x-large; 
   color: red;
}`] 
})
export class AppComponent {
   Name: string="Marvellous Infosystems";
  }

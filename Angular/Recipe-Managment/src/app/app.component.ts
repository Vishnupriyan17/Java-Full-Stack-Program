import { Component } from '@angular/core';

interface Recipe{
  name:string,
  country:string,
  url:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Recipe-Managment';
  
  name:string=""
}

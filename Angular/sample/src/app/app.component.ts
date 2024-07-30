import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name : string ;
  age : number;
  email : string;
  textcolor : string;

  constructor() {
    this.name = "vishnu";
    this.age = 21;
    this.email = "vishnukodees@.com";
    this.textcolor = "green";
  }

  getaddition(a : number,b : number)
  {
    let sum = a + b;
    return sum;
  }

  changename(){
    this.name = "Vishnupriyan"
  }

  changeage(){
    this.age = 51
  }

  changemail(){
    this.email = "vishnukodeeswaran@gmail.com"
  }
}

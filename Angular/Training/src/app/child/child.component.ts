import { Component } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  sub : number;
  constructor(private calc : CalculatorService){
    this.sub=calc.getSubtraction(30,40);
  }
}

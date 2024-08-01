import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // name : string ;
  // age : number;
  // email : string;
  // textcolor : string;
  // imgpath : string;

  // fname : string="";
  // flag : boolean;
  // vehicles : string[];
  // selectedVehicle :String="";
  // myStyle : {};
  // myClass : string;

  // constructor() {
  //   this.name = "vishnu";
  //   this.age = 21;
  //   this.email = "vishnukodees@gmail.com";
  //   this.textcolor = "green";
  // this.imgpath = "https://th.bing.com/th/id/OIP.J1TOxQXvvDq55Q3i_GJnMwAAAA?rs=1&pid=ImgDetMain";
  // this.flag = true;
  // this.vehicles = ["Twowheeler", "ThreeWheeler","FourWheeler"];
  // this.myStyle = {'width' : '40%','border' : '2px solid green'};
  // this.myClass = "Myclass1";
  // }

  // getaddition(a : number,b : number)
  // {
  //   let sum = a + b;
  //   return sum;
  // }

  // changename(){
  //   this.name = "Vishnupriyan"
  // }

  // changeage(){
  //   this.age = 51
  // }

  // changemail(){
  //   this.email = "vishnukodeeswaran@gmail.com"
  // }
  // changeFlag() {
  //   this.flag =! this.flag;
  // }

  // setSelectedItem(vec : string)
  // {
  //   this.selectedVehicle = vec;
  // }


  //service

  sum : number;

  constructor(public calc : CalculatorService){
    this.sum = calc.getAddition(10,30);
  }
}
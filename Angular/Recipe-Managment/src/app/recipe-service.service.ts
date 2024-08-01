import { Injectable } from '@angular/core';
export interface food{
 name:string,
 country:string,
 url:string
}

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  constructor() { }

  foodlist:food[] = [
    {name:"Thakkali satham",
      country:"India",
      url:"https://example.com"
    },
    {
      name:"Sambar satham",
      country:"India",
      url:"https://example.com"
    },
    {
      name:"Chicken",
      country:"India",
      url:"https://example.com"
    }
  ];

  oncreate(){
    
  }

}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Luv2ShopFormService {

  constructor() { }

  getCreditCardMonths(startMonth: number): Observable<number[]>{
     let data: number[] = [];
     
     //build an array for "Month" dropdown list
     // - Start at current month and  loop until month number 12

     for(let tempMonth = startMonth; tempMonth <= 12; tempMonth++){
        data.push(tempMonth);
     }

     return of(data); 
  }

  getCreditCardYear(): Observable<number[]> {
    let data: number[] = [];

    const startYear: number = new Date().getFullYear();
    const endYear: number = startYear+10;

    for(let tempYear = startYear; tempYear <= endYear; tempYear++){
      data.push(tempYear);
    }

    return of(data);
  }


}



import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstnameServiceService {

  firstName : string = "";
  lastName : string = "";
  constructor(firstName : string,lastName: string) {
    this.firstName=firstName;
    this.lastName=lastName;
   }
}

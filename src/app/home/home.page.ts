import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage 
{
  constructor() {}

  //Declaration of local variables 
  showResult: boolean = false;
  numberOfHours: number;
  hourlyRate: number;
  overtime: number = 0;
  overTimePay: number = 0;
  regularPay: number = 0;
  fourtyHoursPay: number = 0;
  totalPay: number = 0;
  tax: number = 0;

  //calculate function will calculate the total pay as well as tax amount.
  calculate(): void {
    this.numberOfHours <= 40 ?  this.overtime = 0 : this.overtime = this.numberOfHours - 40;
    this.overTimePay = this.overtime  * this.hourlyRate * 1.5;
    this.fourtyHoursPay = 40 * this.hourlyRate;

    if (this.numberOfHours <= 40)
    {
      this.totalPay = this.numberOfHours * this.hourlyRate;
    } 
    else 
    {
      this.totalPay = this.overTimePay + this.fourtyHoursPay
    }

    this.regularPay = this.numberOfHours * this.hourlyRate
    this.tax = this.totalPay * 0.18
  }

  onSubmitBtn(form: NgForm)
  {
    //If all the fields are correct then return Calculated outputs.
    if (!form.valid) 
    {
      return;
    }
    this.calculate()
  }
}

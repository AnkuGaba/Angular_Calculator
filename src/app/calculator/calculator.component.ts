import { Component, OnInit } from '@angular/core';
import { StringCalculatorService } from './string-calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
  providers: [StringCalculatorService]
})
// export class CalculatorComponent implements OnInit {
export class CalculatorComponent {

  // constructor() { }

  // ngOnInit(): void {
  // }

  // input:string = '';
  // result:string = '';
  
 
  // pressNum(num: string) {
    
  //   //Do Not Allow . more than once
  //   if (num==".") {
  //     if (this.input !="" ) {
 
  //       const lastNum=this.getLastOperand()
  //       console.log(lastNum.lastIndexOf("."))
  //       if (lastNum.lastIndexOf(".") >= 0) return;
  //     }
  //   }
 
  //   //Do Not Allow 0 at beginning. 
  //   //Javascript will throw Octal literals are not allowed in strict mode.
  //   if (num=="0") {
  //     if (this.input=="" ) {
  //       return;
  //     }
  //     const PrevKey = this.input[this.input.length - 1];
  //     if (PrevKey === '/' || PrevKey === '*' || PrevKey === '-' || PrevKey === '+')  {
  //         return;
  //     }
  //   }
 
  //   this.input = this.input + num
  //   this.calcAnswer();
  // }
 
 
  // getLastOperand() {
  //   let pos:number;
  //   console.log(this.input)
  //   pos=this.input.toString().lastIndexOf("+")
  //   if (this.input.toString().lastIndexOf("-") > pos) pos=this.input.lastIndexOf("-")
  //   if (this.input.toString().lastIndexOf("*") > pos) pos=this.input.lastIndexOf("*")
  //   if (this.input.toString().lastIndexOf("/") > pos) pos=this.input.lastIndexOf("/")
  //   console.log('Last '+this.input.substr(pos+1))
  //   return this.input.substr(pos+1)
  // }
 
 
  // pressOperator(op: string) {
 
  //   //Do not allow operators more than once
  //   const lastKey = this.input[this.input.length - 1];
  //   if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+')  {
  //     return;
  //   }
   
  //   this.input = this.input + op
  //   this.calcAnswer();
  // }
 
 
  // clear() {
  //   if (this.input !="" ) {
  //     this.input=this.input.substr(0, this.input.length-1)
  //   }
  // }
 
  // allClear() {
  //   this.result = '';
  //   this.input = '';
  // }
 
  // calcAnswer() {
  //   let formula = this.input;
 
  //   let lastKey = formula[formula.length - 1];
 
  //   if (lastKey === '.')  {
  //     formula=formula.substr(0,formula.length - 1);
  //   }
 
  //   lastKey = formula[formula.length - 1];
 
  //   if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '.')  {
  //     formula=formula.substr(0,formula.length - 1);
  //   }
 
  //   console.log("Formula " +formula);
  //   this.result = eval(formula);
  // }
 
  // getAnswer() {
  //   this.calcAnswer();
  //   this.input = this.result;
  //   if (this.input=="0") this.input="";
  // }



  numbers!: string;
  result!: any;
  // ans!: any;

  constructor(private stringCalculator: StringCalculatorService) {
  }

  add(numbers: string): any {
    try {
      return this.stringCalculator.add(numbers);
    } catch (e) {
      return e;
    }
  }

  submit() {
    // this.ans = this.add(this.numbers);
    // if (this.ans) {
    //   this.result = this.ans;
    // }
    // else {
    //   this.result = "No negative number allowed"
    // }
    this.result = this.add(this.numbers);
  }

}

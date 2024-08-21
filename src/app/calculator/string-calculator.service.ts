import { Injectable } from '@angular/core';
import { NumberInput } from "./numberInput.model";

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  add(numbers: string): number {
    let components = this.getComponents(numbers);
    // debugger
    let delimiter = components.delimiter;
    numbers = components.numbers;

    let values = numbers.split(delimiter);
    let sum = 0;
    let invalidValues = [];
    for (let value of values) {
        let numberValue = parseInt(value);
        if (numberValue < 0) {
            invalidValues.push(numberValue);
        } else {
            sum += numberValue > 1000 ? 0 : numberValue;
        }
    }

    if (invalidValues.length) {
        throw new Error('No negative values are allowed: ' + invalidValues.join(', '));
        // return `No negative values are allowed: ` + invalidValues.join(', ');
    }

    return sum || 0;
  }

  getComponents(input: string): NumberInput {
      let delimiter = /,|\n/;
      let numbers = input;
      // debugger
      if (input.startsWith('//')) {
          let temp = input.split('\n').shift();
          // delimiter = new RegExp(this.escapeRegExp(input.split('\n').shift().substr(2)))
          delimiter = new RegExp(this.escapeRegExp(temp!.substr(2)));
          numbers = input.replace(/^\/\/.+\n/, '');
      }

      return new NumberInput(delimiter, numbers);
  }

  escapeRegExp(regExpString: string) {
      regExpString = regExpString.replace(/[\-\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
      // return regExpString.replace('][', '|').replace(/\[|\]/g, '');
      let temp = regExpString.replace('][', '|').replace(/\[|\]/g, '');
      console.log(temp);
      return temp;
  }

}
